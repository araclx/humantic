# araclx/humantic:latest
#
# VERSION         0.0.1
# VENDOR          Araclx Inc.
# MAINTAINER      Jakub Olan <jakub.olan001@gmail.com>

FROM ubuntu:latest AS development

# Container Metadata
LABEL com.araclx.vendor "Araclx Inc."
LABEL com.araclx.maintainer "Jakub Olan <jakub.olan001@gmail.com>"
LABEL com.araclx.product "Humantic"
LABEL com.araclx.version "0.0.1"

# Healthchecking to monitor application status
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -v http://localhost/ || exit 1

# Working Directory of container
WORKDIR /usr/src/humantic

# Container User with root permissions
USER root

# Environment Configuration
ENV ROOT_URL https://ide.araclx.com:3000

RUN \
    # Disable interactive mode
    echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections && \
    # Update server base
    apt update && \
    apt upgrade -y -q && \
    # Install basic packages
    apt -y -q install \
    nodejs npm curl git build-essential && \
    # Install important npm packages
    npm i -g yarn n forever && \
    # Install tj/n as a Node Manager and use LTS
    # curl -L https://git.io/n-install | bash && \
    n lts && PATH="$PATH"

# Install Meteor Framework
RUN curl https://install.meteor.com/ | sh

# Install Application Dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy source of application
COPY . .

# Create worker and directories
# Additionally add permissions
RUN useradd -ms /bin/bash node && \
    mkdir .meteor/local && \
    mkdir /usr/src/humantic/dist && \
    chown -Rh node .meteor/local  && \
    chown -Rh node /usr/src/humantic/dist

# Build files
RUN yarn build --allow-superuser

# TODO: Nginx Configuration

# Unpack archive and install packages
RUN tar -zxf dist/humantic.tar.gz && \
    chown -Rh node bundle && \
    cd /usr/src/humantic/bundle/programs/server && \
    yarn install && cd /usr/src/humantic/ && \
    # Create permissions for forever
    mkdir /usr/sbin/.forever && \
    chown -Rh node /usr/sbin/.forever && \
    cd /usr/src/humantic/bundle

USER node
EXPOSE 3000/tcp
CMD ["node", "bundle/main.js"]