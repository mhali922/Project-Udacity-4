# Build Stage
FROM node:18 as build
WORKDIR /app

# Copy app code
COPY . .

# Pass environment variable at build time
ARG REACT_APP_MOVIE_API_URL
ENV REACT_APP_MOVIE_API_URL=$REACT_APP_MOVIE_API_URL

# Install deps and build the app
RUN npm install && npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

