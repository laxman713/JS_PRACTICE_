const path = require('path')

const proControllerget = (req,res)=>{
   
    res.sendFile(path.join(__dirname,"..","view","products.html"))
}

const proControllerPost = (req,res)=>{
  res.send(req.body.productName);
}

module.exports={
    proControllerget,
    proControllerPost
}