const bookControllerGet = (req,res)=>{
     res.send(`
        <h1>Here is the list of books</h1>`);
}


const bookControllerPost = (req,res)=>{
    res.send(`
        <h1>Book has been added!</h1>`);
}

module.exports ={
    bookControllerGet,
    bookControllerPost
}