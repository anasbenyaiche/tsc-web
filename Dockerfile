# Stage 1: Build the Vite application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies for building
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Vite application for production
# This command will create the 'dist' directory with your static files
RUN npm run build

# Stage 2: Serve the built application with 'serve'
FROM node:20-alpine AS production

WORKDIR /app

# Install the 'serve' package globally to serve static files
RUN npm install -g serve

# Copy only the built static assets from the builder stage
# We only need the 'dist' folder for the final production image
COPY --from=builder /app/dist ./dist

# Expose the port that 'serve' will listen on (default for 'serve' is 3000, 
# but you specified 8888 in your docker run command, so we'll use that for consistency)
EXPOSE 8888

# Command to run the 'serve' package, serving files from the 'dist' directory
# -s: serves a static site
# -l: listens on the specified port
CMD ["serve", "-s", "dist", "-l", "8888"]