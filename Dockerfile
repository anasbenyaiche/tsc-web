# Step 1: Builder - Build both frontend and backend
FROM node:20-alpine as builder

WORKDIR /app
COPY . .

# Install dependencies and build the app
RUN npm install && npm run build

# Step 2: Production image with Apache and Node.js
FROM node:20-alpine

# Install Apache and enable required modules
RUN apk update && \
    apk add apache2 apache2-utils && \
    mkdir -p /run/apache2 && \
    sed -i '/LoadModule proxy_module/s/^#//g' /etc/apache2/httpd.conf && \
    sed -i '/LoadModule proxy_http_module/s/^#//g' /etc/apache2/httpd.conf && \
    sed -i '/LoadModule rewrite_module/s/^#//g' /etc/apache2/httpd.conf

# Set working directory
WORKDIR /app

# Copy the build artifacts and production dependencies
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN npm install --omit=dev

# Copy Apache virtual host configuration
COPY apache/000-default.conf /etc/apache2/conf.d/000-default.conf

# Expose HTTP port
EXPOSE 5050 88

# Start Apache in the background, and run the Node.js backend
CMD sh -c "httpd -D FOREGROUND & node dist/index.js"
