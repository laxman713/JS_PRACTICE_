const express = require("express");
const app = express();
const path = require('path');
const productRouteget = require("./routes/productRoute");


app.use('/api/products',productRouteget)
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"view","error.html"))
})
app.listen(1000,()=>{
    console.log("Server is running on localhost:1000")
})