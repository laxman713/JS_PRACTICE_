const express = require('express');
const app = express();

app.use('/home',(req,res,next)=>{
   res.send(`
    <h1>Home Page</h1>`)
   
})


// app.get('/products',(req,res)=>{
//     // res.json(orders);
//     res.send(`
//     <h1>Here is the list of all products</h1>`)
// })

// app.post('/products',(req,res)=>{
//     res.send("A new product has been created");
// })

// app.get('/categories',(req,res)=>{
//     res.send(`
//         <h1>Here is the list of all categories</h1>`);
// })

// app.post('/users',(req,res)=>{
//     res.send(`
//         <h1>A new categoery has been added<h1>
//         `);
// })

// app.use( (req, res) => {
//     res.status(404).send('<h1>404 - Page Not Found</h1>');
// });



app.get('/welcome/:username',(req,res)=>{
    const username = req.params.username;
     const role = req.query.role;
     const shift = req.query.shift;
    res.send(`Welcome ${username} and your role is ${role} shift starts from ${shift}`);
})

app.listen(4000,()=>{
    console.log("Server is running on 4000")
})