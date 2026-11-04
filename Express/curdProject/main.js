const express = require('express');
const app = express();
const courseRoute = require("./routes/course")
const studentRoute = require("./routes/student")

app.use('/home',(req,res,next)=>{
    res.send(`
        <h1>Home Page</h1>`)
})
app.get('/welcome',(req,res)=>{
    res.send(`
        <h1> "Welcome to the Student & Course Portal API!" </h1>`)
})

app.use('/courses',courseRoute);
app.use('/students',studentRoute);


app.use((req,res)=>{
    res.status(404).send(`
        <h1>Page not found</h1>`)
})
app.listen(1000,()=>{
    console.log("server is running on http://localhost:1000");
})
