# Build stage
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
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
