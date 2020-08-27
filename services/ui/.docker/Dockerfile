# humantic/ui:latest
#
# VERSION         0.0.1
# VENDOR          Araclx Inc.
# MAINTAINER      Jakub Olan <jakub.olan001@gmail.com>

FROM node:alpine AS build

# Container Metadata
LABEL com.araclx.vendor "Araclx Inc."
LABEL com.araclx.maintainer "Jakub Olan <jakub.olan001@gmail.com>"
LABEL com.araclx.product "Humantic"
LABEL com.araclx.subsystem "UI"
LABEL com.araclx.version "0.0.1"

# Working Directory of container
WORKDIR /usr/src/humantic

# Container User with root permissions
USER root

# Container DotENV Configuration
ENV NODE_ENV 'production'
ENV SKIP_PREFLIGHT_CHECK 'true'

# Install Application Dependencies
COPY package.json .
RUN yarn

# Add react-scripts globally since this thing is fucked up.
RUN yarn global add react-scripts

# Copy source of application
COPY . .

# Build files
RUN yarn build

# Second stage as a deployment
FROM nginx AS deploy

# Copy build files to nginx static files
COPY --from=build /usr/src/humantic/build /usr/share/nginx/html

# Overwrite Nginx configuration with one contained in source code.
COPY --from=build /usr/src/humantic/.docker/nginx.conf /etc/nginx/conf.d/default.conf

# Healthchecking to monitor application status
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -v http://localhost/ || exit 1

# Expose Application
EXPOSE 80/tcp
ENTRYPOINT [ "nginx" ]
CMD [ "-g", "daemon off;" ]
