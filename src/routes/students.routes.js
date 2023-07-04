const express = require('express');
const routerStudents = express.Router();
const studentsControllers = require('../controllers/studentsController');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

//* Definicion de rutas y derivacion al controlodaro correspondiente

//Ruta para mostrar todos los estudiantes
routerStudents.get('/', studentsControllers._getStudents);

//Ruta para mostrar un estudiante por su id
routerStudents.get('/:id', studentsControllers._getStudentById);

//Ruta para crear un estudiante
routerStudents.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('edad', 'La edad es obligatoria').not().isEmpty(),
        check('grado', 'El grado es obligatorio').not().isEmpty(),
        validateFields
    ],
    studentsControllers._addStudent
);

//Ruta para actualizar un estudiante por su id
routerStudents.put('/:id', studentsControllers._updateStudent);

//Ruta para eliminar un estudiante por su id
routerStudents.delete('/:id', studentsControllers._deleteStudent);

//Ruta para mostrar los cursos en los que esta el estudiante
routerStudents.get('/:id/cursos', studentsControllers._getStudentSubjects);

module.exports = routerStudents;