# FROM node:18-alpine

# WORKDIR /app

# # for  sqlite3
# RUN apk add --no-cache python3 make g++ bash

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "dev"]


# FROM node:18-alpine

# WORKDIR /app

# # for sqlite3
# RUN apk add --no-cache python3 make g++ bash

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "dev"]


FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Installer les dépendances système nécessaires pour sqlite3
RUN apk add --no-cache python3 make g++ bash linux-headers

# Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances Node
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port utilisé par l'app
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "run", "dev"]
