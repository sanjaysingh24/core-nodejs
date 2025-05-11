const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    let data = "";
 res.writeHead(200, { "Content-Type": "text/plain" })
 const readablestream = fs.createReadStream('demo.txt','utf-8')
 readablestream.on('data',(chunk)=>{
   data += chunk;
 })
  readablestream.on('end',()=>{
    res.end(data)
  })
});



const port = 3000;
server.listen(port,(err)=>{
    if(err)throw err;
    console.log(`listening on the ${port}`)
})