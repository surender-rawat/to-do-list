FROM nginx:1.23.2-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/cwh-todo-list /usr/share/nginx/html