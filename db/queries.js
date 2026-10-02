const pool = require('./pool')

const getMessages = async () => {
    const result = await pool.query('SELECT * FROM messages ORDER BY timestamp DESC');
    return result.rows;
}

const insertMessage = async (message, username, timestamp) => {
    await pool.query('INSERT INTO messages (message, username, timestamp) VALUES ($1, $2, $3)', [message, username, timestamp]);
}

module.exports = {
    getMessages,
    insertMessage
}