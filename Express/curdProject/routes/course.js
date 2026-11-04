const express = require('express');
const router = express.Router();

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

router.get('/',(req,res)=>{
    res.send(`
        <h1>Courses: ${courses[0].name} and ${courses[1].name} </h1>`)
})

router.get('/:userId',(req,res)=>{
  const userId = Number(req.params.userId);
 if (userId !== 1 && userId !== 2) {
        return res.status(404).send('<h1>Page not found</h1>');
    }
  res.send(
    `
   <h1>Courses: ${courses[userId-1].name}</h1>
  
   <h3>Description: </h3>
   
   <p> ${courses[userId-1].description}</p>
    `
  )
})



module.exports = router;