const express = require('express');
const app = express();

const userRoute = require("./routes/users")
const cartRoute = require("./routes/cart")
const productRoute = require("./routes/products")

app.use('/users',userRoute);
app.use('/cart',cartRoute);
app.use('/products',productRoute);

app.use((req,res)=>{
    res.status(404).send(
        `
        <h1> Page not found</h1>
        `
    )
})
app.listen(1000,()=>{
    console.log("Server is running on localhost:1000");
})