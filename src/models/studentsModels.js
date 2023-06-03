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

//Consulta PUT
exports.deleteStudent = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM estudiantes WHERE id = ?',[id]);
    return rows;
}