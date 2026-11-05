const userControllerGet = (req,res)=>{
      res.send(`
        <h1> Fetching all users </h1>
        `)
}

const userControllerPost = (req,res)=>{
     res.send(`
        <h1> Adding new user </h1>
        `)
}

const userControllerGetId = (req,res)=>{
     const id = req.params.id;
    res.send(`
        <h1> Fetching user with ID: ${id} </h1>
        `)
}


module.exports =  {
     userControllerGet,
     userControllerPost,
     userControllerGetId

}