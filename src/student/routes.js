const {Router} = require('express');
const controller = require('./controller')
const router = Router();
const pool = require("../../db");


//const poola = require("../../db.js");

router.get('/',controller.getStudents)
router.get('/studentsup30',controller.getStudentsUp30)
router.get('/studentsup50',controller.getStudentsUp50)
router.get('/:id',controller.getStudentsByid)
//`${}`

// router.get('/',(req,res)=>{
//     res.send("using api route")
// })
// ssssss


// router.get('/studentsup50',(req,res) => {    
//     pool.query("SELECT * FROM students",(error,results)=>{
//         if (error) throw error;
//         res.status(200).json(results.rows)
//     });
// })


module.exports = router;
