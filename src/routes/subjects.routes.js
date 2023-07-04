const express = require('express');
const routerSubjects = express.Router();
const subjectsController = require('../controllers/subjectsController');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

//* Definicion de rutas y derivacion al controlador correspondiente

//Ruta para mostrar todos los cursos
routerSubjects.get('/', subjectsController._getSubjects);

//Ruta para mostrar un curso por su id
routerSubjects.get('/:id', subjectsController._getSubjectById);

//Ruta para crear un curso
routerSubjects.post('/',
    [
        check('estudiante_id', 'El id del estudiante es obligatorio').not().isEmpty(),
        check('curso_id', 'El id del curso es obligatorio').not().isEmpty(),
        validateFields
    ],
    subjectsController._addSubject
);

//Ruta para actualizar un curso por su id
routerSubjects.put('/:id', subjectsController._updateSubject);

//Ruta para eliminar un curso por su id
routerSubjects.delete('/:id', subjectsController._deleteSubject);

//Ruta para mostrar los estudiantes que realizan el curso
routerSubjects.get('/:id/estudiantes', subjectsController._getStudentSubjects);

routerSubjects.post('/:id/estudiantes', subjectsController._addStudentSubject);

routerSubjects.delete('/:id/estudiantes', subjectsController._deleteStudentsSubject);


module.exports = routerSubjects;