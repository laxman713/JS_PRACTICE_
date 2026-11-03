const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("Server created");
    console.log(res.data);
   res.setHeader('Content-Type','text/html');
   if(req.url == '/'){
    res.statusCode = 200;
    res.end("<h1>Hello world</h1>")
   }else if(req.url=='/about'){
    res.statusCode = 200;
    res.end("<h1>About</h1>")
   }
   else{
    res.statusCode = 404;
    res.end("<h1> page not found</h1>")
   }

})

const port = 3000;

server.listen(port,()=>{
    console.log("server running");
})