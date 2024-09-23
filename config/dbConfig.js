const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',   // Seu host do MySQL
    user: 'root',        // Seu usuário do MySQL
    password: '', // Sua senha
    database: 'API',  // Nome do banco de dados
});

module.exports = pool;