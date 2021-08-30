FROM node:16-alpine

WORKDIR /usr/apps/express-template

COPY ./src .

COPY package.json yarn.lock ./

RUN yarn install --production=true && yarn cache clean --all

CMD ["yarn", "dev"]