const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Configurar middleware para manejar datos JSON
app.use(express.json());

// Conexión a la base de datos MySQL con Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nombre_de_tu_base_de_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql'
});

// Verificar la conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos establecida'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Define tus modelos y relaciones con Sequelize aquí

// Rutas para el CRUD
// Aquí definirás tus rutas para crear, leer, actualizar y eliminar datos en la base de datos

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
