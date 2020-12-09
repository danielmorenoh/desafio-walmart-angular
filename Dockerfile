FROM node:12.0
WORKDIR  /app
COPY ./ /app/
RUN npm install
EXPOSE 4200
ENTRYPOINT npm start