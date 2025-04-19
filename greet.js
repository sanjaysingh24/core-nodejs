// now we are learn about the modules in node js we have three type of modules 
// built in modules  no require to  install additionaly
//custom modules 
// third party modules
// and by default node js use the common module not es6 module
//example of common module import and export 
const add = (a,b)=>{
console.log(a+b);
}
const multiply = (a,b)=>{
    console.log(a*b);
}
module.exports = {add,multiply}; 