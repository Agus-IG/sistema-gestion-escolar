//Importacion de la diferentes dependencias para utilizarlas
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routerStudents = require('./../routes/students.routes');
const routerProfessors = require('./../routes/professors.routes');
const routerSubjects = require('./../routes/subjects.routes');

//Objeto servidor 
class Server {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.app.use(express.json());
    }

    //Definicion de las diferentes direcciones de las rutas
    routes() {
        this.app.use('/api/estudiantes', routerStudents);
        this.app.use('/api/profesores', routerProfessors);
        this.app.use('/api/cursos', routerSubjects);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }

    listen() {
        this.app.listen(3000, () => {
            console.log("Servidor corriendo en el puerto 3000")
        })
    }
};

module.exports = Server;