const mongoose = require('mongoose');

const urlDb = 'mongodb://localhost:27017/proyecto5_movies_api';

const connect = async () => {
  try {
    await mongoose.connect(urlDb);
    console.log('Conectado a MongoDB correctamente');
  } catch (error) {
    console.log('Error al conectar con MongoDB');
  }
};

module.exports = { connect };