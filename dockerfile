FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g concurrently

COPY . .


EXPOSE 3000 3001


CMD ["/bin/sh", "-c",  "npm run serve"]
