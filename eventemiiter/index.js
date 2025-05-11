const eventemitter = require('events');
const emiiter = new eventemitter();

emiiter.on('greet',(name)=>{
    console.log(`hello event listen from the on ${name}` )
})
// emiiter.once('greet',(name)=>{
//     console.log(`hello event listen from the on ${name}` )
// })

// triggeer twice time so it will console.log the value twice time
//
emiiter.emit('greet','sanju');
emiiter.emit('greet','baba');