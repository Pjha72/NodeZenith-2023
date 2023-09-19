// 1. Javascript Fundamentals for nodejs.
// 2. Conditions, Loops and Array
// 3. The import function and Variables from another file.
// 4. Interview Questions

const app = require('./app.js');



var x = '20';
// if(x===20){
//     console.log("Match");
// }
// else{
//     console.log("Not Match");
// }

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

const arr=[2,4,5,6,7,3];
console.log(app.z());


// Interview Questions
// What is use of filter function?
// Ans : 1. if find any specific value from array/list then we can use filter function.
// 2. code : 
arr.filter((item)=>{
    // console.log(item);
    if(item%2==0){
        console.log(item);
    }
});