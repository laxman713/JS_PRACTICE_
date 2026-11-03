const express = require('express');
const app = express();

app.use('/home',(req,res,next)=>{
   res.send(`
    <h1>Home Page</h1>`)
    // next();
})

app.get('/orders',(req,res)=>{
    // res.json(orders);
    res.send(`
    <h1>Here is the list of all orders</h1>`)
})
const orders = [];
app.post('/orders',(req,res)=>{
    const order = {
        product : "Laptop",
        quantity: 2
    };
    orders.push(order);
    console.log(orders);
    res.send("A new order has been created");
})

app.get('/users',(req,res)=>{
    res.send(`
        <h1>Here is the list of all users</h1>`);
})

app.post('/users',(req,res)=>{
    res.send(`
        <h1>A new user has been added<h1>
        `);
})

app.listen(3000,()=>{
    console.log("Server is running on 3000")
})