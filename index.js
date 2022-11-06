const express = require('express');
const studentRoutes = require('./src/student/routes');
const app = express();
const PORT = 3000;

app.use(express.json())

app.get("/",(req,res)=>{
    const userName = req.query['name']
    res.send("hello world " + userName)
})

app.use('/api/v1/students',studentRoutes)

app.listen(PORT, () => {
    console.log('app is launching under port : ' + PORT)
})