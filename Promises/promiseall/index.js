let p1 = new Promise((resolve,reject)=>{
    let success  = true;
   setTimeout(()=>{
     if(success){
        resolve("Promise 1 resolved");
    }
    else{
        reject("Promise 1 rejected");
    }
   },1000)
})

let p2 = new Promise((resolve,reject)=>{
    let success = false;
    setTimeout(()=>{
           if(success){
        resolve("Promise 2 resolved");
    }
    else{
        reject("Promise 2 rejected");
        
    }
    },200)
})


let p3 = new Promise((resolve,reject)=>{
    let success = true;
    setTimeout(()=>{
        if(success){
        resolve("Promise 3 resolved");
    }
    else{
        reject("Promise 3 rejected");
    }
    },1000)
})

// if all promises are  success then it will return all promise otherwise one of the promises is false then it will return  the false one
// in promise.all make sure all the promises are success 
 
// Promise.all([p1,p2,p3]).then((result)=>console.log(result)).catch((err)=>console.log(err))

//promise.race
//Promise.race([p1,p2,p3]).then((result)=>console.log(result)).catch((err)=>console.log(err))
Promise.allSettled([p1,p2,p3]).then((result)=>console.log(result)).catch((err)=>console.log(err))
