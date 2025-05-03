const fs  =require("fs");

// fs.mkdir("new-directory/new",{recursive:true},(err)=>{
//     if(err) throw err;
//     console.log("New directory created")
// })

// fs.readdir("new-directory",(err,files)=>{
//     if(err) throw err;
//     console.log("all files",files);
// })

fs.rmdir("new-directory",{recursive:true,force:true},(err)=>{
    if(err) throw err;
    console.log("successfully delete")
})