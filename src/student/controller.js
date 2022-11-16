//const pool = require("../../db");
const pool = require("../../db");
const queries = require("./queries")

 const getAthletes = async (req,res) => {    
    try {   
      await pool.query(queries.getAthletesquery,(error,results)=>{
         if (error) throw error;
         res.status(200).json(results.rows)
     });
    } catch (err) {
        console.error(err.message)
    }
 };

 const getAthletesUp30 = async (req,res) => { 
    try {

    
    await pool.query(queries.getAthletesUp30,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows)
    });
}   catch(err){
    console.error(err.message)
}
};

const getAthletesUp50 = async (req,res) => { 
    try {

    
    await pool.query(queries.getAthletesUp50,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows)
    });
}   catch (err){
    console.error(err.message)
}
};

const getAthletesByid = (req,res) => {    
    pool.query(`SELECT * FROM gymath where id= ${req.params.id};` ,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows)
    });
};

const addAthlete = async (req,res) => {
    try {
  
   const {name,dob,dos,notes,montant} = req.body;
  //  const {name,notes,montant} = req.body;

    console.log(`name is ${name}`)
    
    // check if email exists ?
    // pool.query(queries.checkNameExists,[name], (error,results)=>{
    // //pool.query(queries.checkNameExists, (error,results)=>{
    //     ////console.log(`rowslength equal tooooo ${results.rows.length}`)
    //     if (results.rows.length>0) {
    //         res.send("notes already exists.");
    ////     }
        
     await pool.query(queries.addAthletequery,[name,dob,dos,notes,montant], (error,results)=>{
//     await pool.query(queries.addAthletequery,[name,notes,montant], (error,results)=>{

        if (error) throw error;
        res.status(201).send("athlete created successfuly!")
    })
} catch (err) {
    console.error(err.message)
}
    //}
    //)


}


const removeAthlete = async (res,req) => {
  try {    
    await pool.query(`SELECT * FROM gymath where id= ${req.params.id};` ,(error,results)=>{
        const Nonathletefound = !results.rows.length;
        if (Nonathletefound) {
            res.send("athlete dosent exists in the database")
        }
    });

    await pool.query(queries.removeathletequery,[id],(error,results)=>{
        res.status(200).send("athlete removing successufuly!")
    })

} catch (err) {
    console.error(err.message)
}
 }

 const updateAthletes = async (req,res) => {
    try{
        const id = parseInt(req.params.id);
        const {name} = req.body;
        // if(Nonathletefound2){
        //     res.send("athelete was updating!!")
        // }
        await pool.query(queries.updateAthletesquery,[name,id],(error,results)=>{
            if (error) throw error;
            res.status(200).send("athlete is updating successufuly!")
        })        

    } catch (err){
        console.error(err.message)
    }
 }

module.exports = {
    getAthletes,
    getAthletesUp30,
    getAthletesByid,
    getAthletesUp50,
    addAthlete,
    removeAthlete,
    updateAthletes
}