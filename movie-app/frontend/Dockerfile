# Build stage
<<<<<<< HEAD
FROM node:16-alpine AS builder

WORKDIR /app

# Accept build-time variable
ARG REACT_APP_MOVIE_API_URL
ENV REACT_APP_MOVIE_API_URL=$REACT_APP_MOVIE_API_URL

# Copy package files first (for better caching)
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build React app with env var
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
=======
FROM node:18 AS builder

WORKDIR /app

# Pass the environment variable at build time
ARG REACT_APP_MOVIE_API_URL
ENV REACT_APP_MOVIE_API_URL=$REACT_APP_MOVIE_API_URL

COPY package*.json ./
RUN npm install

COPY . .

# Skip lint preflight check in CRA
ENV SKIP_PREFLIGHT_CHECK=true

RUN npm run build

# Serve stage
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

# Optional: custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

>>>>>>> 5d015b9 (Post fix frontend dependencies)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
