const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    
    const url = req.url;
    const method = req.method;

    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.end(
            `
            <form action="/message" method="POST">
            <label> Name : </label>
            <input type="text" name="username"/>
            <button type="submit">Add</button>
            </form>

            `
        )
    }
    else{
        if(req.url==="/message"){
                    res.setHeader('Content-Type','text/html');
                     let dataChunks = []
                    req.on('data',(chunks)=>{
                        dataChunks.push(chunks);
                //  console.log(chunks);
    })
   req.on('end',()=>{
      let combinedBuffer = Buffer.concat(dataChunks)
    //   console.log(combinedBuffer.toString());
      let splitBuffer = combinedBuffer.toString().split("=")[1];
    //   console.log(splitBuffer);
      fs.writeFile('formValues.txt',splitBuffer,(err)=>{
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
      })
    })

        }
        else{
            if(req.url=='/read'){
                fs.readFile('formValues.txt',(err,data)=>{
                    console.log(data.toString());

                    res.end(`<h1>
                          ${data.toString()}
                        </h1>`);
                })
            }
        }
    }
})

const port = 5000;

server.listen(port,()=>{
    console.log("server is running");
})