FROM node:16

LABEL Maintainer="Emmanuel ADEBAYO <emmanueltolu.adebayo@gmail.com>"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000


RUN npm run build

CMD ["npm", "run", "start:prod"]