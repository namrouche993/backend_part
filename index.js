//https://www.youtube.com/watch?v=DihOP19LQdg&t=3590s
const express = require('express');
const studentRoutes = require('./src/student/routes');
const app = express();
const PORT = 3001;
const cors = require('cors');

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    const userName = req.query['name']
    res.send("hello world " + userName)
})

app.use('/api/v1/gymathletes',studentRoutes)

app.listen(PORT, () => {
    console.log('app is launching under port : ' + PORT)
})