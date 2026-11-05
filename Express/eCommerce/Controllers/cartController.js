const cartControllerGet =(req,res)=>{
    const id = req.params.id;
     res.send(`
        <h1> Fetching cart for user with ID: ${id} </h1>
        `)
}

const cartControllerPost =(req,res)=>{
     const id = req.params.id;
    res.send(`
        <h1> Fetching cart for user with ID: ${id} </h1>
        `)
}

module.exports ={
    cartControllerGet,
    cartControllerPost
}