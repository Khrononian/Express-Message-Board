const { Pool } = require('pg')

module.exports = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dbmessages',
  password: '005522',
  port: 5432,
})