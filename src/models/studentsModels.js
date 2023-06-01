const db = require('../config/dbConnection');

//*CONSULTAS SQL

exports.getStudents = async () => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes');
    console.log(rows);
    return rows;
};

exports.getStudentById = async (id) => {
    const [rows, fields] = await db.execute('SELECT * FROM estudiantes WHERE id=?', [id]);
    console.log(rows);
    return rows;
};

exports.addStudent = async (student) => {
    const [rows, fields] = await db.execute('INSERT INTO estudiantes (nombre, edad, grado) VALUES(?, ?, ?)', [student.nombre, student.edad, student.grado]);
    console.log(rows);
    return rows;
};

exports.updateStudent = async (student) => {
    console.log(student);
    const [rows, fields] = await db.execute('UPDATE estudiantes SET nombre = ?, edad = ?, grado = ? WHERE id = ?)', [student.nombre, student.edad, student.grado, student.id]);
};