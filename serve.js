const http  = require('http');
const fs = require('fs');
const path = require('path');
let server = http.createServer((req,res)=>{

    if(req.url=="/"){
        let filepath = path.join(__dirname,"index.html");


        fs.readFile(filepath,"utf-8",(err,data)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/plain"});
               res.end("Internal server error")
            }else{
                res.writeHead(200,{"Content-Type":"text/html"});
                 res.end(data);
            }
        });
    }
    else if(req.url=="/about"){
        let filepath = path.join(__dirname,"about.html");
        fs.readFile(filepath,"utf-8",(err,data)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/plain"});
                res.end("Internal server error")
            }
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            }
        })
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
         res.end("404 not found");
    }
    
})

const port = 3000; 
server.listen(port,()=>{
    console.log("server is running on port " + port)
})