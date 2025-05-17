// console.log("Start");
// setTimeout(()=>{
//     console.log("Execute after 2 second");
// },2000);


// console.log("End")


// const id = setInterval(()=>{
//     console.log("Execute after every 2 second")
// },2000);


// setTimeout(()=>{
//     clearInterval(id);

//     console.log("Stopped Interval")
// },10000);


console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("process.nextTick"));
setInterval(() => console.log("setInterval"),0);

console.log("End");
