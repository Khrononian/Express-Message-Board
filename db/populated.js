require('dotenv').config();
const { Client } = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message VARCHAR(255),
    username VARCHAR(255),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (message, username, timestamp)
VALUES 
    ('Hey there! Its me, Jennifer. Text me back when you get a chance.', 'Jennifer', DEFAULT);
`

const main = async () => {
    const client = new Client({
        // connectionString: 'postgresql://postgres:005522@localhost:5432/dbmessages'
        connectionString: process.env.DATABASE_URL
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
}
main()