const {Router} = require('express');
const controller = require('./controller')
const router = Router();
const pool = require("../../db");


//const poola = require("../../db.js");

router.get("/",controller.getAthletes);
router.post("/",controller.addAthlete);
router.get("/athletesup30",controller.getAthletesUp30);
router.get("/athletesup50",controller.getAthletesUp50);
router.get("/:id",controller.getAthletesByid);
router.put("/:id",controller.updateAthletes)
router.delete("/:id",controller.removeAthlete);



//`${}`

// router.get('/',(req,res)=>{
//     res.send("using api route")
// })
// ssssss


// router.get('/Athletesup50',(req,res) => {    
//     pool.query("SELECT * FROM Athletes",(error,results)=>{
//         if (error) throw error;
//         res.status(200).json(results.rows)
//     });
// })


module.exports = router;
