# humantic/<serviceName>:latest
#
# VERSION         0.0.1
# VENDOR          Araclx Inc.
# MAINTAINER      Jakub Olan <jakub.olan001@gmail.com>

FROM node:alpine AS development

# Container Metadata
LABEL com.araclx.vendor "Araclx Inc."
LABEL com.araclx.maintainer "Jakub Olan <jakub.olan001@gmail.com>"
LABEL com.araclx.product "Humantic"
LABEL com.araclx.subsystem "API"
LABEL com.araclx.version "0.0.1"

# Working Directory of container
WORKDIR /usr/src/humantic

# Healthchecking to monitor application status
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -v http://localhost:3600/ || exit 1

# Container User with root permissions
USER root

# Container DotENV Configuration
ENV NODE_ENV 'development'

# Install Application Dependencies
COPY package.json .
RUN yarn install

# Copy source of application
COPY . .

# Build files
RUN yarn build

# Application Entrypoint
EXPOSE 3600/tcp
ENTRYPOINT ["node"]
CMD [ "dist/gateway.worker.js" ]
