const express = require('express');
const { connect } = require('./utils/db');
const movieRoutes = require('./routes/movie.routes');
const cinemaRoutes = require('./routes/cinema.routes');

const server = express();
const PORT = 3000;

connect();
server.use(express.json());

server.use('/movies', movieRoutes);
server.use('/cinemas', cinemaRoutes);

server.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});