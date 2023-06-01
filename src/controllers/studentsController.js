const studentModel = require('./../models/studentsModels');

//*CONTROLADORES


//Controlador para listar los estudiantes
exports._getStudents = async (req, res) => {

    //Evaluacion del bloque dentro del try
    try {
        //Obtenemos los datos desde el modelo
        const students = await studentModel.getStudents();

        //*Si todo esta correcto se mostraran los estudiantes por el lado del cliente
        res.status(200).json({
            success: true,
            data: students
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