const db = require('../config/dbConnection');

//*CONSULTAS SQL

//Consulta GET
exports.getProfessors = async () => {
    const [rows, fields] = await db.execute('SELECT * FROM profesores');
    console.log(rows);
    return rows;
};

//Consulta GET por id
exports.getProfessorById = async (id) => {
    const [rows, fields] = await db.execute('SELECT * FROM profesores WHERE id=?', [id]);
    console.log(rows);
    return rows;
};

//Consulta POST
exports.addProfessor = async (professor) => {
    const [rows, fields] = await db.execute('INSERT INTO profesores (nombre, especialidad, email) VALUES(?, ?, ?)', [professor.nombre, professor.especialidad, professor.email]);
    return rows;
};

//Consulta PUT
exports.updateProfessor = async (professor) => {
    console.log("Modelo")
    console.log(professor);
    const [rows, fields] = await db.execute('UPDATE profesores SET nombre = ?, especialidad = ?, email = ? WHERE id = ?', [professor.nombre, professor.especialidad, professor.email, professor.id]);
};

//Consulta PUT
exports.deleteProfessor = async (id) => {
    const [rows, fields] = await db.execute('DELETE FROM profesores WHERE id = ?',[id]);
    return rows;
};