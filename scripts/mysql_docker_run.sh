docker run \
    -p 3306:3306 \
    --name mysql-recipe \
    -v /mysql/db/:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=recipe-ofmine \
    -e MYSQL_DATABASE=dev \
    -d mysql:5.7.22

