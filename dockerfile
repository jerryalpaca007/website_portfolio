FROM nginx:alpine
WORKDIR /app

COPY ./site /usr/share/nginx/html

EXPOSE 80