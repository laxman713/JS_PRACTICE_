const express = require('express');
const router = express.Router();



router.post('/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`
        <h1> Fetching cart for user with ID: ${id} </h1>
        `)
})

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`
        <h1> Fetching cart for user with ID: ${id} </h1>
        `)
})

module.exports = router;