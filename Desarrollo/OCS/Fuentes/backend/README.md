# OnlyCourses - backend &middot; [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm)

> Repositorio de la parte del backend del proyecto OnlyCourses

El proyecto trata de una plataforma de educación online. En este caso se ha desarrollado la API que implementará esta plataforma

## Iniciar el proyecto

Para poder iniciar la aplicación tenemos que tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/) y [Yarn](https://yarnpkg.com/)

```bash
# Instalamos las dependencias
yarn install

# Corremos Docker compose
docker compose -f docker-compose.dev.yml up --build
```

Una vez realizado estos pasos podemos dirigirnos a http://localhost:3001.

Si queremos parar el contenedor podemos usar el siguiente comando en otra terminal

```bash
docker compose -f docker-compose.dev.yml down
```

## Base de datos

La API hace uso de una base de datos relacional usando MySQL, por lo que una vez la aplicación esté en ejecución abriremos otra terminal y seguiremos los siguientes pasos

```bash
# Accedemos a la terminal dentro del contenedor
docker exec -it yachay-db /bin/bash

# Nos conectamos a MySQL dentro del contendor
mysql -u root -p
# Aqui seguro nos pedira una constraseña, ponemos 'root'

# Una vez dentro de mysql creamos un nuevo usario
create user 'user'@'%' identified by 'pass'; # usuario que puede conectarse desde cualquier IP

grant all privileges on *.* to 'user'@'%' with grant options;

flush privileges;
```

Reiniciamos el contenedor y ya podremos conectarnos a nuestra instancia de mysql desde cualquier aplicación

## Instalar nuevas dependencias

Para poder instalar una nueva dependencia existen tenemos dos maneras de hacerlo

1. Agregar manualmente la dependencia (nombre y versión) dentro del archivo `package.json` y ejecutar `docker compose -f docker-compose.dev.yml up --build` nuevamente

2. Ejecutar directamente el comando `docker exec yachay-frontend-dev yarn add <nombre_dependencia>` mientras el contenedor está en ejecución.

Por recomendación, la segunda manera es la mejor alternativa.
