const Pool = require('pg').Pool;


const pool = new Pool({
    user: "postgres",
    host: "34.173.77.144",
    database: "gymathletesdb",
    password: "yamahaa123",
    port: 5432,
})

module.exports = pool;
