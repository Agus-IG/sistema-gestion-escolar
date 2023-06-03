const express = require('express');
const routerStudents = express.Router();
const studentsControllers = require('../controllers/studentsController');

//* Definicion de rutas y derivacion al controlodaro correspondiente

//Ruta para mostrar todos los estudiantes
routerStudents.get('/', studentsControllers._getStudents);

//Ruta para mostrar un estudiante por su id
routerStudents.get('/:id', studentsControllers.getStudentById);

/* 
//Ruta para crear un estudiante
routerStudents.post();

//Ruta para actualizar un estudiante por su id
routerStudents.put();

//Ruta para eliminar un estudiante por su id
routerStudents.delete();

*/



module.exports = routerStudents;