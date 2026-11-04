const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send(`
        <h1> Fetching all users </h1>
        `)
})

router.post('/',(req,res)=>{
    res.send(`
        <h1> Adding new user </h1>
        `)
})

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`
        <h1> Fetching user with ID: ${id} </h1>
        `)
})

module.exports = router;