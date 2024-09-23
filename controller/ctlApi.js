const pool = require('../config/dbConfig');  // Certifique-se de importar a configuração do banco de dados

const GetAllSalasDeAula = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM salasdeaula WHERE removido = FALSE');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
};

const GetSalasDeAulaByID = async (req, res) => {
    const { salasdeaulaid } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM salasdeaula WHERE salasdeaulaid = ? AND removido = FALSE', [salasdeaulaid]);
        if (rows.length === 0) {
            res.status(404).json({ message: 'Sala de aula não encontrada' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
};

const InsertSalasDeAula = async (req, res) => {
    const { descricao, localizacao, capacidade, removido } = req.body;
    try {
        const result = await pool.query('INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido) VALUES (?, ?, ?, FALSE)', [descricao, localizacao, capacidade]);
        res.status(201).json({ id: result[0].insertId, message: 'Sala de aula inserida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
};

const UpdateSalasDeAula = async (req, res) => {
    const { salasdeaulaid } = req.params;
    const { descricao, localizacao, capacidade, removido } = req.body;
    try {
        const result = await pool.query('UPDATE salasdeaula SET descricao = ?, localizacao = ?, capacidade = ? WHERE salasdeaulaid = ?', [descricao, localizacao, capacidade,  salasdeaulaid]);
        if (result[0].affectedRows === 0) {
            res.status(404).json({ message: 'Sala de aula não encontrada' });
        } else {
            res.json({ message: 'Sala de aula atualizada com sucesso' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
};

const DeleteSalasDeAula = async (req, res) => {
    const { salasdeaulaid } = req.params;
    try {
        const result = await pool.query('UPDATE salasdeaula SET removido = TRUE WHERE salasdeaulaid = ?', [salasdeaulaid]);
        if (result[0].affectedRows === 0) {
            res.status(404).json({ message: 'Sala de aula não encontrada' });
        } else {
            res.json({ message: 'Sala de aula removida com sucesso' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
};

module.exports = {
    GetAllSalasDeAula,
    GetSalasDeAulaByID,
    InsertSalasDeAula,
    UpdateSalasDeAula,
    DeleteSalasDeAula
};
