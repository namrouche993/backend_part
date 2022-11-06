const {Router} = require('express');
const controller = require('./controller')
const router = Router();

//const poola = require("../../db.js");

router.get('/',controller.getStudents)

// router.get('/',(req,res)=>{
//     res.send("using api route")
// })
// sss

module.exports = router;
