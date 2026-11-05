const path = require('path');

const bookControllerGet = (req,res)=>{
     res.sendFile(path.join(__dirname,"..","view","book.html"));
}


const bookControllerPost = (req,res)=>{
    res.send(`
        <h1>Book has been added!</h1>`);
}

module.exports ={
    bookControllerGet,
    bookControllerPost
}