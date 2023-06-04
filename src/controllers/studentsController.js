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

//Controlador para listar un estudiante
exports._getStudentById = async (req, res) => {
    const idStudent = req.params.id;

    //Evaluacion del bloque dentro del try
    try {
        //Obtenemos los datos desde el modelo
        const student = await studentModel.getStudentById(idStudent);

        //Creamos una condicion en caso de que el estudiante que queramos mostrar no exista en la base de datos
        if (student.length < 1) {
            res.status(404).json({
                success: false,
                message: `No existe estudiante con el id: ${idStudent}`
            })
        }

        //*Si todo esta correcto se mostrara el estudiante
        res.status(200).json({
            success: true,
            student
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

//Controlador para crear un estudiante
exports._addStudent = async (req, res) => {

    //Tomamos los datos que ingresamos y los guardamos en una constante
    const student = req.body;

    try {

        const id = await studentModel.addStudent(student);

        res.status(201).json({
            success: true,
            message: "Estudiante agregado con exito!",
            student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Hubo un error al obtener los datos"
        });

    };

};

//Constrolador para actualizar los datos de un estudiante
exports._updateStudent = async (req, res) => {
    const studentData = req.body;
    const idStudent = req.params.id;

    const student = {
        idStudent,
        ...studentData
    }

    console.log(student);

    try {
        const listUpdate = await studentModel.updateStudent(student);
        if (listUpdate < 1) {
            res.status(404).json({
                success: false,
                msg: 'Datos no actualizados'
            });
        };

        res.status(200).json({
            success: true,
            msg: "Datos actualizados",
            listUpdate
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

//Controlador para eliminar a un estudiante por su id
exports._deleteStudent = async (req, res) => {
    const idStudent = req.params.id;

    try {

        const student = await studentModel.deleteStudent(idStudent);

        if (student.length < 1) {
            res.status(404).json({
                success: false,
                message: `No existe estudiante con el id: ${idStudent}`
            });
        };

        //*Si todo esta correcto se mostrara el estudiante
        res.status(200).json({
            success: true,
            message: "El estudiante fue eliminado con exito"
        });
        
    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        });
        
    };
};