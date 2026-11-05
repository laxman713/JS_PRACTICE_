const proControllerGet = (req,res)=>{
    res.send(`
        <h1> Fetching all products </h1>
        `)
}

const proControllerPost = (req,res)=>{
     res.send(`
        <h1> Adding new product </h1>
        `)
}

const proControllerGetId = (req,res)=>{
      const id = req.params.id;
    res.send(`
        <h1> Fetching product with ID: ${id} </h1>
        `)
}



module.exports = {
    proControllerGet,
    proControllerPost,
    proControllerGetId
}