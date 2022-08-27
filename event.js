const fs = require('fs');

console.log("start /////////");

let path = "C:/Users/Ajay/Desktop/Daily class/coinChange.js"
let data = fs.readFileSync(path,"utf-8")
console.log(data);

console.log("end //////////////");


// fs.readFile(path,"utf-8",(err,data)=>{
//     if(err){
//         console.log("error !");
//     }else{
//         console.log(data);
//     }
// })

// console.log("THE END  ///////////////");