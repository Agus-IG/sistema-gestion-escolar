const express = require('express');
const routerProfessors = express.Router();
const professorsControllers = require('../controllers/professorsController');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

//* Definicion de rutas y derivacion al controlador correspondiente

//Ruta para mostrar todos los profesores
routerProfessors.get('/', professorsControllers._getProfessors);

//Ruta para mostrar un profesor por su id
routerProfessors.get('/:id', professorsControllers._getProfessorById);

//Ruta para crear un profesor
routerProfessors.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('especialidad', 'La especialidad es obligatoria').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validateFields
    ],
    professorsControllers._addProfessor
);

//Ruta para actualizar un profesor por su id
routerProfessors.put('/:id', professorsControllers._updateProfessor);

//Ruta para eliminar un profesor por su id
routerProfessors.delete('/:id', professorsControllers._deleteProfessor);



module.exports = routerProfessors;