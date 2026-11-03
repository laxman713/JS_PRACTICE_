const express = require('express');
const app = express();

function useMiddleWare(req,res,next){
    req.user = "Guest";
    next();
}

app.get('/welcome', useMiddleWare,(req,res)=>{
    res.send(`<h1> "Welcome ${req.user}!</h1>`)
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})