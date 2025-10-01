FROM node:18-alpine


WORKDIR /app


RUN apk add --no-cache python3 make g++ bash linux-headers


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]


# FROM node:18-alpine

# WORKDIR /app


# RUN apk add --no-cache python3 make g++ bash linux-headers wget tar


# RUN wget https://www.sqlite.org/2023/sqlite-autoconf-3410200.tar.gz \
#     && tar xzf sqlite-autoconf-3410200.tar.gz \
#     && cd sqlite-autoconf-3410200 \
#     && ./configure --prefix=/usr/local \
#     && make && make install \
#     && cd .. && rm -rf sqlite-autoconf-3410200* sqlite-autoconf-3410200.tar.gz



# COPY package*.json ./


# RUN npm install


# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "dev"]
