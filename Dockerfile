FROM node:16-alpine

WORKDIR /usr/apps/express-template

COPY . .

COPY package*.json ./

RUN yarn install --silent && yarn cache clean --all

CMD ["yarn", "dev"]