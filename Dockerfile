# Step 1: Builder - Build both frontend and backend
FROM node:20-alpine as builder

WORKDIR /app
COPY . .

# Install ALL dependencies (including dev dependencies) for build
RUN npm install
# Build the app
RUN npm run build

# Step 2: Production image with Apache and Node.js
FROM node:20-alpine

# Install Apache and required modules
RUN apk update && \
    apk add --no-cache apache2 apache2-utils apache2-proxy apache2-ssl && \
    mkdir -p /run/apache2 && \
    # Enable required Apache modules
    sed -i \
        -e '/LoadModule proxy_module/s/^#//g' \
        -e '/LoadModule proxy_http_module/s/^#//g' \
        -e '/LoadModule proxy_wstunnel_module/s/^#//g' \
        -e '/LoadModule rewrite_module/s/^#//g' \
        -e '/LoadModule headers_module/s/^#//g' \
        -e '/LoadModule ssl_module/s/^#//g' \
        /etc/apache2/httpd.conf && \
    # Add custom port configuration
    echo "Listen 8888" >> /etc/apache2/httpd.conf && \
    # Add global ServerName
    echo "ServerName localhost" >> /etc/apache2/httpd.conf

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy the build artifacts
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Copy Apache virtual host configuration
COPY apache/000-default.conf /etc/apache2/conf.d/000-default.conf

# Create required directories and set permissions
RUN mkdir -p /var/log/apache2 && \
    chown -R apache:apache /var/log/apache2 && \
    chmod -R 755 /var/log/apache2

# Expose HTTP ports
EXPOSE 5050 8888

# Start Apache and Node.js backend
CMD sh -c "httpd -D FOREGROUND & node dist/index.js"
