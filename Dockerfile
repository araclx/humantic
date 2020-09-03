# araclx/humantic:latest
#
# VERSION         0.0.1
# VENDOR          Araclx Inc.
# MAINTAINER      Jakub Olan <jakub.olan001@gmail.com>

FROM node:alpine AS development

# Container Metadata
LABEL com.araclx.vendor "Araclx Inc."
LABEL com.araclx.maintainer "Jakub Olan <jakub.olan001@gmail.com>"
LABEL com.araclx.product "Humantic"
LABEL com.araclx.version "0.0.1"

# Working Directory of container
WORKDIR /usr/src/humantic

# Healthchecking to monitor application status
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -v http://localhost:3600/ || exit 1

# Container User with root permissions
USER root

# Install curl
RUN apk --no-cache add curl bash

# Install Meteor Framework
RUN curl https://install.meteor.com/ | sh

# Container DotENV Configuration
ENV NODE_ENV 'production'

# Install Application Dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy source of application
COPY . .

# Build files
RUN yarn build

# Use non-root user for process
USER node

# Application Entrypoint
EXPOSE 3000/tcp
ENTRYPOINT ["node"]
CMD [ "dist" ]
