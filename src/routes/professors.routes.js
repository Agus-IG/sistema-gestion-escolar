const express = require('express');
const routerProfessors = express.Router();
const professorsControllers = require('../controllers/professorsController');

//* Definicion de rutas y derivacion al controlador correspondiente

//Ruta para mostrar todos los profesores
routerProfessors.get('/', professorsControllers._getProfessors);

//Ruta para mostrar un profesor por su id
routerProfessors.get('/:id', professorsControllers._getProfessorById);

//Ruta para crear un profesor
routerProfessors.post('/', professorsControllers._addProfessor);

//Ruta para actualizar un profesor por su id
routerProfessors.put('/:id', professorsControllers._updateProfessor);

//Ruta para eliminar un profesor por su id
routerProfessors.delete('/:id', professorsControllers._deleteProfessor);



module.exports = routerProfessors;