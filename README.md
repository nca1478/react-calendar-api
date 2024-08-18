# Calendario Api

`Calendario Api` es el backend para el proyecto de la Aplicación Calendario.

## Características

- Endpoints de eventos del usuario.
- Endpoints para autenticación de los usuarios.
- Data y validación de token a través de middlewares.
- Endpoints protegidos con JSON Web Token.
- Modelos y Base de datos alojados por Mongo Atlas.

## Propósito del proyecto

- Este proyecto fue desarrollado para aplicar y practicar las tecnologías de back-end que se muestran a continuación.

## Tech Stack

- Javascript.
- NodeJS.
- ExpressJS.
- Mongoose.
- MongoDB Atlas.

## Herramientas de Desarrollo

- [ExpressJS](https://expressjs.com/)
- [Nodejs](https://nodejs.org/en/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Mongoose](https://mongoosejs.com/)
- [Vscode](https://code.visualstudio.com/)

## Demo Calendario App

- [Calendario App](https://calendar-app-njca.netlify.app/)

## Repo Calendario App

- [Calendario App](https://github.com/nca1478/react-calendar-app)

## Requerimientos

- Nodejs v18.0.0
- Docker Destop.

## Instalación de Api y Base de Datos

## Variables de entorno

- Renombrar .env.example a .env.
- Agregar las credenciales al .env.
- Actualizar variable `NODE_ENV` a: `dev` o `prod` sea el caso.

## Opcion 1: Instalar Api y DB

- Copiar todos los archivos de la carpeta docker a la raíz.
- Ejecutar el comando: `docker compose up --build -d`
- Para eliminar: `docker compose down --volumes`

## Opcion 2: Instalar solo Base de Datos.

- Ejecuta: `docker compose -f db/docker-compose.yml up -d`
- Luego: `npm install` y `npm run dev`
- Eliminar DB: `docker compose -f db/docker-compose.yml down --volumes`

## Pruebas de Endpoints en Postman

- Importar endpoints y variables de la carpeta postman

## Archivo de entrada

> src/index.js
