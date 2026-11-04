const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    // res.json(orders);
    res.send(`
    <h1>Here is the list of all products</h1>`)
})

router.post('/p',(req,res)=>{
    res.send("A new product has been created");
})


module.exports = router;