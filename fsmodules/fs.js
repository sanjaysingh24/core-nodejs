const fs = require('fs');
// this is async file read
// fs.readFile("message.txt","utf-8",(err,data)=>{
//     if(err)throw err;
//     console.log('async read file',data);// then this one
// })


// this is a synchronouse file read

const data = fs.readFileSync("message.txt","utf-8");
console.log(data);
console.log("baba");// first it will print 