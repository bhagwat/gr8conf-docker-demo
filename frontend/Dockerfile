FROM node:0.10
MAINTAINER Bhagwat Kumar "bhagwat.kumar@tothenew.com"

RUN npm install nodemon -g

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

ADD $PWD /app
WORKDIR /app
EXPOSE 3000