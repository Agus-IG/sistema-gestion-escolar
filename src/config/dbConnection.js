//Conexion a la base de datos
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escuela'
})

module.exports = pool.promise();