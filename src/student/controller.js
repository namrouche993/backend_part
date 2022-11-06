//const pool = require("../../db");
const pool = require("../../db");

 const getStudents = (req,res) => {    
     pool.query("SELECT * FROM students",(error,results)=>{
         if (error) throw error;
         res.status(200).json(results.rows)
     });
 };

// const getStudents = (req,res) => {
//      res.send('getting students')
//  } ss

module.exports = {
    getStudents
}