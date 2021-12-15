FROM node:16-alpine

WORKDIR /usr/apps/express-template

COPY ./src .

COPY package.*json ./

RUN npm install

CMD ["npm", "run", "dev"]