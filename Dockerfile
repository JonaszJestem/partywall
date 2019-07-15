FROM node:10

WORKDIR /backend

COPY package.json package.json
RUN npm install
COPY . .

RUN npm run prestart:prod
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
