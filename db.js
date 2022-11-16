const Pool = require('pg').Pool;


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "gymdatabase",
    password: "yamahaa123",
    port: 5432,
})

module.exports = pool;