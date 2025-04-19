console.log("start");// synchronous direct print
setTimeout(()=>{
    console.log("Timeout 1"); // web api callback queue

    setTimeout(()=>{ 
        console.log("Timeout 2") // web api callback queue
    },0)
},0)
console.log("end"); //stack synchormous directly print 