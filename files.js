const fs = require('fs');
// here we learn about to handle the files 
// firstly write the file 
//console.log("start");// direct stack then print
// below is the asynchronous way to write files

// fs.writeFile("hello.txt","Hello sanjay",(err)=>{
//     if(err){
//         console.log("there is some error ")
//     }
//     else{
//         console.log("file is created")
//     }
// })// all the asyn things go to the webapi or  callback queue


// console.log("end");// when the both thing are printed the stack is empty then  the event loop go to the callback queue and execute the asyn function

// now  write a code to read a  file
const readfile =()=> fs.readFile("hello.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log('file read',data);
})
//readfile();

// to add something in the file
const appendfile  =()=>fs.appendFile("hello.txt","\n hey how are you",(err)=>{
    if(err) throw err;
    console.log("file is appended");
})

//appendfile();

const deletfile = ()=>{
    fs.unlink("hello.txt",(err)=>{
        if(err)throw err;
        console.log("file is deleted");
    })
}
deletfile();

//wo hoo that's good my boi 