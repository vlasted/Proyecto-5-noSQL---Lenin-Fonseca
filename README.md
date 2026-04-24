# Proyecto 5 - noSQL

API REST de películas y cines desarrollada con Express, MongoDB y Mongoose.

## Tecnologías
- Node.js
- Express
- MongoDB
- Mongoose
- Postman

## Instalación
1. Instalar dependencias:
   npm install

2. Arrancar MongoDB en local.

3. Ejecutar la semilla de películas:
   npm run seed:movies

4. Arrancar el servidor:
   npm run dev

## Scripts
- `npm run dev`
- `npm start`
- `npm run seed:movies`

## Endpoints de Movies
- `GET /movies`
- `GET /movies/id/:id`
- `GET /movies/title/:title`
- `GET /movies/genre/:genre`
- `GET /movies/year/:year`
- `POST /movies`
- `PUT /movies/:id`
- `DELETE /movies/:id`

## Endpoints de Cinemas
- `GET /cinemas`
- `POST /cinemas`
- `PUT /cinemas/:id`
- `DELETE /cinemas/:id`

## Evidencias
La imagen final con las pruebas realizadas en Postman está en:
- `docs/postman/pruebas-api.png`

## Autor
Lenin Fonseca