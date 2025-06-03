# ---------- Build Stage ----------
FROM node:16 AS builder

# Set working directory
WORKDIR /app

# Pass the environment variable at build time
ARG REACT_APP_MOVIE_API_URL
ENV REACT_APP_MOVIE_API_URL=$REACT_APP_MOVIE_API_URL

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# React build fix for crypto issue in Webpack on Node 17+
#ENV NODE_OPTIONS=--openssl-legacy-provider
ENV SKIP_PREFLIGHT_CHECK=true

# Build the React app
RUN npm run build

# ---------- Production Serve Stage ----------
FROM node:16 AS production

WORKDIR /app

# Copy built files from builder stage
COPY --from=builder /app/build ./build

# Install a simple HTTP server to serve static content
RUN npm install -g serve

# Expose the port serve runs on
EXPOSE 80

# Serve the built React app
CMD ["serve", "-s", "build", "-l", "80"]
