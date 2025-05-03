const fs = require("fs");

// create a file and add some data

const createuser = (newuser)=>{
    // create a json file
   let users = JSON.parse(fs.readFileSync("user.json","utf-8"));
   users.push(newuser);
   fs.writeFileSync("user.json",JSON.stringify(users,null,2));
   console.log("user created")
}

// createuser({name:"sanjay",age:34});

const adduser = (newuser)=>{
  let users = JSON.parse(fs.readFileSync("user.json","utf-8"));
  users.push(newuser);
  fs.writeFileSync("user.json",JSON.stringify(users,null,2));
  console.log("user added successfully");
   
}

// adduser({name:"Mohan",age:90});


//update a user 
const update = (name,updatedata)=>{
    let user = JSON.parse(fs.readFileSync("user.json","utf-8"));
       user = user.map(item=>item.name==name ?{...item, ...updatedata}:item);
    fs.writeFileSync("user.json",JSON.stringify(user,null,2))
     console.log("name changed successfully");
}
//update("ram",{age:44});


const deletuser = (name)=>{
    let user = JSON.parse(fs.readFileSync("user.json","utf-8"));
    user = user.filter(item=>item.name!=name);
    fs.writeFileSync("user.json",JSON.stringify(user,null,2));
    console.log("changed successfully")
}
deletuser("sanjay");