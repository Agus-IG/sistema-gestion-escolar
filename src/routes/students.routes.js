const express = require('express');
const routerStudents = express.Router();
const studentsControllers = require('../controllers/studentsController');

//* Definicion de rutas y derivacion al controlodaro correspondiente

//Ruta para mostrar todos los estudiantes
routerStudents.get('/', studentsControllers._getStudents);

//Ruta para mostrar un estudiante por su id
routerStudents.get('/:id', studentsControllers._getStudentById);

//Ruta para crear un estudiante
routerStudents.post('/', studentsControllers._addStudent);

//Ruta para actualizar un estudiante por su id
routerStudents.put('/:id', studentsControllers._updateStudent);

//Ruta para eliminar un estudiante por su id
routerStudents.delete('/:id', studentsControllers._deleteStudent);


module.exports = routerStudents;