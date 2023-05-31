const express = require('express');
const routerProfessors = express.Router();
const professorsControllers = require('../controllers/professorsController');

//* Definicion de rutas y derivacion al controlador correspondiente

//Ruta para mostrar todos los profesores
routerProfessors.get();

//Ruta para mostrar un profesor por su id
routerProfessors.get();

//Ruta para crear un profesor
routerProfessors.post();

//Ruta para actualizar un profesor por su id
routerProfessors.put();

//Ruta para eliminar un profesor por su id
routerProfessors.delete();

module.exports = routerProfessors;