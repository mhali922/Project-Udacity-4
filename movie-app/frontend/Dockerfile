# Build stage first

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

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
