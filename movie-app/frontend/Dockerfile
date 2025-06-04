FROM node:16 AS builder

WORKDIR /app

ARG REACT_APP_MOVIE_API_URL
ENV REACT_APP_MOVIE_API_URL=$REACT_APP_MOVIE_API_URL

COPY package*.json ./
RUN npm ci

COPY . .

# Explicitly write .env.production from build arg 
RUN echo "REACT_APP_MOVIE_API_URL=$REACT_APP_MOVIE_API_URL" > .env.production

RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
