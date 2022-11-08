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

const addStudent = (req,res) => {
    const {name,email,age,dob} = req.body;
    console.log(`name is ${name} and email is ${email} `)
    // check if email exists ?
    pool.query(queries.checkEmailExists,[email], (error,results)=>{
    //pool.query(queries.checkEmailExists, (error,results)=>{
        ////console.log(`rowslength equal tooooo ${results.rows.length}`)
        if (results.rows.length>0) {
            res.send("Email already exists.");
        }
        }
    )

     pool.query(queries.addStudentquery,[name,email,age,dob], (error,results)=>{
         if (error) throw error;
         res.status(201).send("Student created successfuly!")
     })

}


const removeStudent = (res,req) => {
    pool.query(`SELECT * FROM students where id= ${req.params.id};` ,(error,results)=>{
        const Nonstudentfound = !results.rows.length;
        if (Nonstudentfound) {
            res.send("Student dosent exists in the database")
        }
    });

    pool.query(queries.removestudentquery,[id],(error,results)=>{
        res.status(200).send("Student removing successufuly!")
    })
 }


module.exports = {
    getStudents,
    getStudentsUp30,
    getStudentsByid,
    getStudentsUp50,
    addStudent,
    removeStudent
}