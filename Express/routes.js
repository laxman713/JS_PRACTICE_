const express = require('express');
const app = express();
const oredrRoute = require('./routes/products')
const catRoute = require('./routes/categories');
app.use((req,res,next)=>{
      console.log(`${req.method} request mad to ${req.url}`)
      next();
})
app.use('/home',(req,res,next)=>{
   res.send(`
    <h1>Home Page</h1>`)
   
})
app.use("/products",oredrRoute);
app.use("/categories",catRoute);


app.get('/welcome/:username',(req,res)=>{
    const username = req.params.username;
     const role = req.query.role;
     const shift = req.query.shift;
    res.send(`Welcome ${username} and your role is ${role} shift starts from ${shift}`);
})

app.use( (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(4000,()=>{
    console.log("Server is running on http://localhost:4000/")
})