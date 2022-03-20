FROM node:14-alpine AS builder
WORKDIR /app
EXPOSE 3000
COPY . .
RUN npm install && npm run build 

FROM nginx:1.21.6
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
