# OnlyCourses - frontend &middot; [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm)

> Repositorio de la parte del frontend del proyecto OnlyCourses

El proyecto trata de una plataforma de educación online.

## Iniciar el proyecto

Para poder iniciar la aplicación tenemos que tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/) y [Yarn](https://yarnpkg.com/)

```bash
# Instalamos las dependencias
yarn install

# Activamos el uso de Git Hooks
yarn run prepare

# Corremos Docker compose
docker compose -f docker-compose.dev.yml up --build
```

Una vez realizado estos pasos podemos dirigirnos a http://localhost:3000.

Si queremos parar el contenedor podemos usar el siguiente comando en otra terminal

```bash
docker compose -f docker-compose.dev.yml down
```

## Instalar nuevas dependencias

Para poder instalar una nueva dependencia existen tenemos dos maneras de hacerlo

1. Agregar manualmente la dependencia (nombre y versión) dentro del archivo `package.json` y ejecutar `docker compose -f docker-compose.dev.yml up --build` nuevamente

2. Ejecutar directamente el comando `docker exec yachay-frontend-dev yarn add <nombre_dependencia>` mientras el contenedor está en ejecución.

Por recomendación, la segunda manera es la mejor alternativa.
