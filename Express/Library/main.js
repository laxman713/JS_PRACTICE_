const express = require('express');
const app = express();
const bookRoute = require("../Library/routes/books")

app.use('/home',(req,res,next)=>{
    res.send(`
        <h1>Home Page</h1>`);
})

app.use("/books",bookRoute);


app.listen(2000,()=>{
    console.log("Server is running on http://localhost:2000");
})