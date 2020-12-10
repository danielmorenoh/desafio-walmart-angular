# desafio-walmart-angular

Creación imagen:

docker build -t "angular-docker" .

Creación y ejecución contenedor:

docker run -d --name angular-docker -p 4200:4200 --link spring-boot-docker:spring angular-docker:latest
