# 1. Builder for the app
FROM node:20-alpine as builder

WORKDIR /app
COPY . .

RUN npm install && npm run build

# 2. Production image with Apache + Node
FROM node:20-alpine

# Install apache2 and enable proxy modules
RUN apk update && apk add apache2 apache2-utils && mkdir -p /run/apache2
RUN a2enmod proxy
RUN a2enmod proxy_http

# Copy built app
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

# Copy Apache config
COPY apache/000-default.conf /etc/apache2/conf.d/

# Start Apache + Node.js (basic approach)
CMD sh -c "node dist/index.js & httpd -D FOREGROUND"