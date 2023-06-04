const db = require('../config/dbConnection');

//*CONSULTAS SQL

//Consulta GET
exports.getSubjects = async () => {
    const [rows, fields] = await db.execute('SELECT * FROM cursos');
    console.log(rows);
    return rows;
};

//Consulta GET por id
exports.getSubjectById = async (id) => {
    const [rows, fields] = await db.execute('SELECT * FROM cursos WHERE id=?', [id]);
    console.log(rows);
    return rows;
};

//Consulta POST
exports.addSubject = async (subject) => {
    const [rows, fields] = await db.execute('INSERT INTO cursos (nombre, especialidad) VALUES (?, ?)', [subject.nombre, subject.especialidad]);
    return rows;
};

//Consulta PUT
exports.updateSubject = async (subject) => {
    console.log("Modelo")
    console.log(subject);
    const [rows, fields] = await db.execute('UPDATE cursos SET nombre = ?, especialidad = ? WHERE id = ?', [subject.nombre, subject.especialidad, subject.id]);
};

//Consulta DELETE
exports.deleteSubject = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM cursos WHERE id = ?',[id]);
    return rows;
};