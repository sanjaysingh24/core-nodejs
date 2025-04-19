const EventEmitter = require('events');
//on for listener
// const event = new EventEmtter();
// event.on("greet",(name,skill)=>{
//     console.log(`${name} is a ${skill}`);
// })

// //emit for listen
// event.emit("greet","sanju","mern stack");

const loginevent = new EventEmitter();
loginevent.on("login",(user)=>{
    console.log("user login")
})
loginevent.emit("login");