# # FROM nginx:alpine
# # COPY default.conf /etc/nginx/conf.d/default.conf
# # EXPOSE 80

# FROM nginx:alpine

# RUN apt update && apt upgrade -y && apt install -y nginx openssl

# RUN mkdir -p /etc/nginx/ssl && \
# openssl req -x509 -nodes -out /etc/nginx/ssl/inception.crt -keyout \
# /etc/nginx/ssl/inception.key -subj "/C=MO/ST=KH/L=KH/O=1337/OU=1337/CN=sdiouane.42.fr/UID=sdiouane"

# # Copie les fichiers de certificat générés
# COPY server.crt /etc/nginx/ssl/
# COPY server.key /etc/nginx/ssl/

# # Copie le fichier de configuration Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# EXPOSE 443


FROM nginx:alpine

# Installe 'openssl' en utilisant le bon gestionnaire de paquets
RUN apk add --no-cache openssl

# Crée le dossier pour les certificats
RUN mkdir -p /etc/nginx/ssl

# Génère le certificat directement dans le conteneur
RUN openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/server.key -out /etc/nginx/ssl/server.crt \
    -days 365 -nodes -subj "/C=MO/ST=KH/L=KH/O=42/OU=42/CN=localhost"

# Copie le fichier de configuration Nginx depuis l'hôte
# Le fichier nginx.conf doit pointer vers /etc/nginx/ssl/server.key et /etc/nginx/ssl/server.crt
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443