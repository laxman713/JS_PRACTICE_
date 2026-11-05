const path = require('path')

const proControllerget = (req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","products.html"))
}


module.exports={
    proControllerget
}