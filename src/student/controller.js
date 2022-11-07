//const pool = require("../../db");
const pool = require("../../db");
const queries = require("./queries")

 const getStudents = (req,res) => {    
     pool.query(queries.getStudentsquery,(error,results)=>{
         if (error) throw error;
         res.status(200).json(results.rows)
     });
 };

 const getStudentsUp30 = (req,res) => {    
    pool.query(queries.getStudentsUp30,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};

const getStudentsUp50 = (req,res) => {    
    pool.query(queries.getStudentsUp50,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};

const getStudentsByid = (req,res) => {    
    pool.query(`SELECT * FROM students where id= ${req.params.id};` ,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};


module.exports = {
    getStudents,
    getStudentsUp30,
    getStudentsByid,
    getStudentsUp50
}