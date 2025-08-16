FROM node:18-alpine

WORKDIR /app

# for  sqlite3
RUN apk add --no-cache python3 make g++ bash

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
