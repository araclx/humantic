FROM node:lts

WORKDIR /humantic

ADD package.json ./
RUN yarn

ADD . .
RUN yarn build

ENTRYPOINT [ "node" ]