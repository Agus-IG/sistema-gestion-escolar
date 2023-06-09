const subjectModel = require('./../models/subjectsModels');

//*CONTROLADORES


//Controlador para listar los cursos
exports._getSubjects = async (req, res) => {

    //Evaluacion del bloque dentro del try
    try {
        //Obtenemos los datos desde el modelo
        const subjects = await subjectModel.getSubjects();

        //*Si todo esta correcto se mostraran los cursos por el lado del cliente
        res.status(200).json({
            success: true,
            data: subjects
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

//Controlador para listar un curso
exports._getSubjectById = async (req, res) => {
    const idSubject = req.params.id;

    //Evaluacion del bloque dentro del try
    try {
        //Obtenemos los datos desde el modelo
        const subject = await subjectModel.getSubjectById(idSubject);

        //Creamos una condicion en caso de que el curso que queramos mostrar no exista en la base de datos
        if (subject.length < 1) {
            res.status(404).json({
                success: false,
                message: `No existe curso con el id: ${idSubject}`
            })
        }

        //*Si todo esta correcto se mostrara el curso
        res.status(200).json({
            success: true,
            subject
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

//Controlador para crear un curso
exports._addSubject = async (req, res) => {

    //Tomamos los datos que ingresamos y los guardamos en una constante
    const subject = req.body;

    try {

        const id = await subjectModel.addSubject(subject);

        res.status(201).json({
            success: true,
            message: "Curso agregado con exito!",
            subject
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Hubo un error al obtener los datos"
        });

    };

};

//Constrolador para actualizar los datos de un curso
exports._updateSubject = async (req, res) => {
    const SubjectData = req.body;
    const idSubject = req.params.id;

    const subject = {
        idSubject,
        ...SubjectData
    }

    console.log(subject);

    try {
        const listUpdate = await subjectModel.updateSubject(subject);
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

//Controlador para eliminar a un curso por su id
exports._deleteSubject = async (req, res) => {
    const idSubject = req.params.id;

    try {

        const subject = await subjectModel.deleteSubject(idSubject);

        if (subject.length < 1) {
            res.status(404).json({
                success: false,
                message: `No existe curso con el id: ${idSubject}`
            });
        };

        //*Si todo esta correcto se mostrara el curso
        res.status(200).json({
            success: true,
            message: "El curso fue eliminado con exito"
        });
        
    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        });
        
    };
};

//Controlador para listar los estudiantes que realizan el curso
exports._getStudentSubjects = async (req, res) => {
    const idSubjectsStudents = req.params.id;

    //Evaluacion del bloque dentro del try
    try {
        //Obtenemos los datos desde el modelo
        const subjectStudents = await subjectModel.getSubjectStudents(idSubjectsStudents);

        //Creamos una condicion en caso de que el estudiante que queramos mostrar no exista en la base de datos
        if (subjectStudents.length < 1) {
            res.status(404).json({
                success: false,
                message: `No existe estudiante con el id: ${idStudent}`
            })
        }

        //*Si todo esta correcto se mostrara el estudiante
        res.status(200).json({
            success: true,
            subjectStudents
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

exports._addStudentSubject = async (req, res) => {

    //Tomamos los datos que ingresamos y los guardamos en una constante
    const id = req.params.id;
    const studentData = req.body;

    const subject_student = {
        id,
        ...studentData
    };


    console.log(subject_student);

    try {
        const listUpdate = await subjectModel.addStudentSubject(subject_student);
        if (listUpdate < 1) {
            res.status(404).json({
                success: false,
                msg: 'No existe el curso'
            });
        };

        res.status(200).json({
            success: true,
            message: "Estudiante agregado al curso con exito!",
            
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Hubo un error al obtener los datos"
        });

    };

};


exports._deleteStudentsSubject = async (req, res) => {
    const id = req.params.id;
    const idStudent = req.body;

    const subject_student_delete = {
        id,
        ...idStudent
    };

    try {

        const subject_student = await subjectModel.deleteStudentSubject(subject_student_delete);

        if (subject_student.length < 1) {
            res.status(404).json({
                success: false,
                message: `No existe estudiante con el id: ${idStudent}`
            });
        };

        //*Si todo esta correcto se mostrara el curso
        res.status(200).json({
            success: true,
            message: "El estudiante fue eliminado del curso con exito"
        });
        
    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        });
        
    };
};