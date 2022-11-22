const Pool = require('pg').Pool;


const pool = new Pool({
    user: "postgres",
    //host: "34.170.131.91",
    database: "gymathletesdb",
    password: "yamahaa123",
    port: 5432,
})

module.exports = pool;
