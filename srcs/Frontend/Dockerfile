FROM node:18-alpine

WORKDIR /app

# Declare build args for the VITE env variables
ARG VITE_API_URL
ARG VITE_API_URL_SOCKET
ARG VITE_API_HOST

# Set environment variables from build args so Vite can access them at build time
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_URL_SOCKET=$VITE_API_URL_SOCKET
ENV VITE_API_HOST=$VITE_API_HOST

COPY package*.json ./

RUN npm cache clean --force
RUN npm install

COPY . .

EXPOSE 5173

# Note: npm run dev reads these env vars at start and Vite injects them
CMD ["npm", "run", "dev"]
