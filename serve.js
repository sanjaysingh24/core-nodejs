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

    else if(req.url.startsWith("/public")){
        const filepath = path.join(__dirname,req.url); // get the absolute file path 
        const ext = path.extname(filepath) // this one is for the extract the extension file extension 
        // now content type mapping for css or javascript
        const mimeTypes = {
            ".css":"text/css",
            ".js":"text/javascript",
            ".png":"image/png",
            ".jpg":"image/jpg",
            ".jpeg":"image/jpeg",
            ".svg":"image/svg+xml",
        }
        fs.readFile(filepath,(err,data)=>{
            if(err){
                res.writeHead(404);
                res.end("Assets Not found")
            }
            else{
                res.writeHead(200,{"Content-Type":mimeTypes[ext] || "application/octet-stream"});
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