FROM debian:bullseye

RUN apt update && apt upgrade -y && apt install -y nginx openssl

COPY conf/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]