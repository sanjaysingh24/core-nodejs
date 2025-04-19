const http = require('http');
// create a server
const server = http.createServer((req,res)=>{
   let url = req.url;
   if(url=="/"){
    res.end("this is a home page");
   }  
   if(url=="/about"){
    res.end("this is a about page");
   }
   if(url=="/contact"){
    res.end("this is a contact page");
   }
   else{
    res.end("404 Not found");
   }
  
})
const port = 3000;
server.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server is running on the ${port}`)
})