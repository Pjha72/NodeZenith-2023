/*
1. Synchronous vs Asynchronous

1. In synchronous operations tasks are performed one at a time.
1. In Asynchronous operations task do not wait to finish First Task.

*/

let a =20;
let b = 0;
console.log('Start exe....');

setTimeout(()=>{
    b=30;
},2000);


console.log(a+b);