FROM node:18-alpine

USER root

WORKDIR /root/app

RUN apk update
RUN apk add --no-cache bash git

RUN npm install -g @angular/cli lite-server
