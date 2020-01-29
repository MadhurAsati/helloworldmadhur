FROM node:argon


RUN "apt-get update && apt-get clean"
RUN npm install -g express
RUN npm install -g nodemon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

EXPOSE 9000
