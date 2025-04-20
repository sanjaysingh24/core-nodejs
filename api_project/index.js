const http = require('http');
const fs  = require('fs');
const path = require('path');
const url = require('url');
const { fileURLToPath } = require('url');

const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url,true);
     const pathname = parsedUrl.pathname;
  
    let filepath = path.join(__dirname,"data.json");
    if(pathname==="/api/users" && req.method==="GET"){
        fs.readFile(filepath,"utf-8",(err,data)=>{
            if(err){
                res.writeHead(404,{"Content-Type":"application/json"});
                res.end("File not found");
            }
            else{
                res.writeHead(200,{"Content-Type":"application/json"});
                res.end(data);
            }
        })
    }
    else if(pathname==="/api/user" && req.method ==="POST"){
        let body="";
        req.on("data",chunk=>{
  
            body +=chunk.toString();
    
        });
    
        req.on("end",()=>{
            const newuser = JSON.parse(body);
  
            const filepath = path.join(__dirname,"data.json");
            fs.readFile(filepath,"utf-8",(err,data)=>{
                if(err){
                    return res.end("Error reading file")
                }
                const users =JSON.parse(data);
                newuser.id=users.length+1;
                users.push(newuser);
                fs.writeFile(filepath,JSON.stringify(users,null,2),err=>{
                    if(err){
                        res.end("Error writing file")
                    }
                    res.writeHead(200,{"Content-Type":"application/json"});
                    res.end(JSON.stringify(newuser))
    
                })
            })
        })
    }
    else if(pathname.startsWith("/api/user/") && req.method==="GET"){
        const id = pathname.split("/")[3];
        const filepath = path.join(__dirname,"data.json");

        fs.readFile(filepath,'utf-8',(err,data)=>{
            if(err){
                res.writeHead(404,{"Content-Type":"application/json"});
                res.end(JSON.stringify({error:"Internal server Error"}))
            }else{
                const users = JSON.parse(data);
                const user = users.find(u=>u.id===Number(id));

                if(user){
                    res.writeHead(200,{"Content-Type":"application/json"});
                    res.end(JSON.stringify(user));
                }else{
                    res.writeHead(404,{"Content-Type":"application/json"});
                    res.end(JSON.stringify({message:"User Not Found"}))
                }
            }
        })
    }


});

const port = 4000;

server.listen(port,(err)=>{
    if(err) console.log(err);
    console.log("server is listen on the " +port);
})
