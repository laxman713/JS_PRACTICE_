const express = require('express');
const router = express.Router();

const students = [

{ id: 1, name: "Alice" },

{ id: 2, name: "Bob" },

{ id: 3, name: "Charlie" }

];

router.get('/',(req,res)=>{
    res.send(`
        <h1>Students: ${students[0].name} , ${students[1].name} and ${students[2].name} </h1>`)
})

router.get('/:userId',(req,res)=>{
  const userId = Number(req.params.userId);
 if (userId !== 1 && userId !== 2 && userId!==3) {
        return res.status(404).send('<h1>Page not found</h1>');
    }
  res.send(
    `
   <h1>Student: ${students[userId-1].name}</h1>
  
   
    `
  )
})



module.exports = router;