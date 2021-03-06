FROM node:10-alpine as builder

# install and cache app dependencies
COPY package.json package-lock.json ./
RUN npm install --only=prod&& mkdir /piashare && mv ./node_modules ./piashare

WORKDIR /piashare

COPY . .

RUN npm run build