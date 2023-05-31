const express = require('express');
const routerSubjects = express.Router();
const subjectsController = require('../controllers/subjectsController');

//* Definicion de rutas y derivacion al controlador correspondiente

//Ruta para mostrar todos los cursos
routerSubjects.get();

//Ruta para mostrar un curso por su id
routerSubjects.get();

//Ruta para crear un curso
routerSubjects.post();

//Ruta para actualizar un curso por su id
routerSubjects.put();

//Ruta para eliminar un curso por su id
routerSubjects.delete();

module.exports = routerSubjects;