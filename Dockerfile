FROM node:latest

WORKDIR /usr/app

COPY package*.json ./usr/app
RUN npm install

COPY . ./usr/app

EXPOSE 2222

CMD ["npm", "run", "dev"]