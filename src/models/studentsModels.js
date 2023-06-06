const db = require('../config/dbConnection');

//*CONSULTAS SQL

//Consulta GET
exports.getStudents = async () => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes');
    console.log(rows);
    return rows;
};

//Consulta GET por id
exports.getStudentById = async (id) => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes WHERE id=?', [id]);
    console.log(rows);
    return rows;
};

//Consulta POST
exports.addStudent = async (student) => {
    const [rows, fields] = await db.execute('INSERT INTO estudiantes (nombre, edad, grado) VALUES(?, ?, ?)', [student.nombre, student.edad, student.grado]);
    return rows;
};

//Consulta PUT
exports.updateStudent = async (student) => {
    console.log("Modelo")
    console.log(student);
    const [rows, fields] = await db.execute('UPDATE estudiantes SET nombre = ?, edad = ?, grado = ? WHERE id = ?', [student.nombre, student.edad, student.grado, student.id]);
};

//Consulta DELETE
exports.deleteStudent = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM estudiantes WHERE id = ?',[id]);
    return rows;
};

//Consulta GET para obtener todos los cursos en los que esta el estudiante
exports.getStudentsSubjects = async (id) => {
    const [rows, fields] = await db.execute('SELECT cursos.nombre, cursos.especialidad FROM `estudiantes_cursos` INNER JOIN cursos ON estudiantes_cursos.curso_id = cursos.id INNER JOIN estudiantes ON estudiantes_cursos.estudiante_id = estudiantes.id AND estudiantes.id = ?',[id]);
    console.log(rows);
    return rows;
};