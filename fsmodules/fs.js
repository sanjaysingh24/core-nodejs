const fs = require('fs');
// this is async file read
// fs.readFile("message.txt","utf-8",(err,data)=>{
//     if(err)throw err;
//     console.log('async read file',data);// then this one
// })


// this is a synchronouse file read

// const data = fs.readFileSync("message.txt","utf-8");
// console.log(data);
// console.log("baba");// first it will print 


// file write if not present then create a new file

// fs.writeFile("new.txt","hmm bro ",(err)=>{
//     if(err)throw err;
//     console.log("text added successfully")
// })

// synchornouse
//

// const data = {
//     name:"Sanjay",
//     role:"Node.js"
// }
// fs.writeFileSync("user.json",JSON.stringify(data),(err)=>{
//     if(err) throw err;
//     console.log("JSON File Written")
// })

fs.appendFile("new.txt","\nNew Line added by sanjay ",(err)=>{
    if(err) throw err;
    console.log("Content update successfully")
})