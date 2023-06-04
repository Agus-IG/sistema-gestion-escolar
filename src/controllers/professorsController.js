const professorModel = require('./../models/professorsModels');

//*CONTROLADORES


//Controlador para listar los profesores
exports._getProfessors = async (req, res) => {

    //Evaluacion del bloque dentro del try
    try {
        //Obtenemos los datos desde el modelo
        const professors = await professorModel.getProfessors();

        //*Si todo esta correcto se mostraran los profesores por el lado del cliente
        res.status(200).json({
            success: true,
            data: professors
        });

    } catch (error) {

        /* Si lo que esta dentro del try falla, se ejecutara las siguientes lineas de codigo para avisar del error tanto por consola, como por el lado del cliente */

        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        });

    };
};

//Controlador para listar un profesor
exports._getProfessorById = async (req, res) => {
    const idProfessor = req.params.id;

    //Evaluacion del bloque dentro del try
    try {
        //Obtenemos los datos desde el modelo
        const professor = await professorModel.getProfessorById(idProfessor);

        //Creamos una condicion en caso de que el profesor que queramos mostrar no exista en la base de datos
        if (professor.length < 1) {
            res.status(404).json({
                success: false,
                message: `No existe profesor con el id: ${idProfessor}`
            })
        }

        //*Si todo esta correcto se mostrara el profesor
        res.status(200).json({
            success: true,
            professor
        });

    } catch (error) {

        /* Si lo que esta dentro del try falla, se ejecutara las siguientes lineas de codigo para avisar del error tanto por consola como por el lado del cliente */

        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        });

    };
};

//Controlador para crear un profesor
exports._addProfessor = async (req, res) => {

    //Tomamos los datos que ingresamos y los guardamos en una constante
    const professor = req.body;

    try {
        const id = await professorModel.addProfessor(professor);

        res.status(201).json({
            success: true,
            message: "Estudiante agregado con exito!",
            professor
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Hubo un error al obtener los datos"
        });

    };

};

//Constrolador para actualizar los datos de un profesor
exports._updateProfessor = async (req, res) => {
    const professorData = req.body;
    const idProfessor = req.params.id;

    const professor = {
        idProfessor,
        ...professorData
    }

    console.log(professor);

    try {
        const listUpdateProfessors = await professorModel.updateProfessor(professor);
        if (listUpdateProfessors < 1) {
            res.status(404).json({
                success: false,
                msg: 'Datos no actualizados'
            });
        };

        res.status(200).json({
            success: true,
            msg: "Datos actualizados",
            listUpdateProfessors
        });
    }
    catch (error) {

        console.error(error)
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        });
    };
};

//Controlador para eliminar a un profesor por su id
exports._deleteProfessor = async (req, res) => {
    const idProfessor = req.params.id;

    try {

        const professor = await professorModel.deleteProfessor(idProfessor);

        if (professor.length < 1) {
            res.status(404).json({
                success: false,
                message: `No existe profesor con el id: ${idProfessor}`
            });
        };

        //*Si todo esta correcto se mostrara el profesor
        res.status(200).json({
            success: true,
            message: "El profesor fue eliminado con exito"
        });
        
    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        });
        
    };
};