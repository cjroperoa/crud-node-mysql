-- creando la base de datos
CREATE DATABASE dev_crud;

-- usando la base de datos
use dev_crud;

-- creando tabla
CREATE TABLE customer {
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  telefono VARCHAR(15)
};

-- ver tablas
SHOW TABLES;

-- descripcion de la tabla
describe customer;



