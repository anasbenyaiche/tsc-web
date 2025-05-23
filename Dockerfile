# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files and install ALL dependencies (including dev dependencies)
# since we need vite in production
COPY package*.json ./
RUN npm ci

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8081

# Expose the port
EXPOSE 8081

# Start the application
CMD ["npm", "start"] 