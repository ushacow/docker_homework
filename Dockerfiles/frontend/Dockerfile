FROM node:14-alpine
WORKDIR /app
EXPOSE 3000
COPY . .
RUN npm install && npm run build &&  npm install -g serve
ENTRYPOINT ["serve","-s", "/app/build", "-p", "3000"]
