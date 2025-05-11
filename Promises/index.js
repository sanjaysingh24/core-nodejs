let apicall =  new Promise((resolve,reject)=>{
    const success= false;
    if(success){
   resolve("success ho gya")
    }
    else{
        reject("error agya bro")
    }
})

apicall
.then((value)=>{
    console.log("Success")
})
.catch((err)=>{
    console.log("Error")
})
.finally((err)=>{
    console.log("promises  khatam")
})
// this is the consuming a Promise