# Database Setup

1. Pull mysql docker image. tag:8.0.11 
$ docker pull mysql:8.0.11
2. Run a container. Expose port
$ docker run -p 3306:3306 --name mysql-recipe -e MYSQL_ROOT_PASSWORD=recipe-ofmine -d mysql:8.0.11
3. 
