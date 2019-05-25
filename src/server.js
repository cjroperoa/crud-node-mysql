const express = require("express");
const path = require('path'); // => modulo para unir directorios
const morgan = require('morgan'); // => modulo 
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// SETTINGS => configuracion Express
app.set('port', process.env.PORT || 3000); // => Port
app.set('view engine', 'ejs'); // => Motor de plantillas
app.set('views', path.join(__dirname, 'views')); // => Enrutando carpeta views

// MIDDLEWARES => funciones que se ejecutan antes de que vengan las peticiones de los usuario (en express se conocen como las rutas del servidor)
app.use(morgan('dev')); 
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'dev_crud'
}, 'single')); // => Conexión a la BD



// ROUTES => secciones del servidor encargadas de procesar algo


app.listen(app.get('port'), () => {
  console.log(`Server on port: ` + app.get('port')); 
});