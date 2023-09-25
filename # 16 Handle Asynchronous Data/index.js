/*Handle Data in asynchronous */
let a = 20, b=0;
// Promise is a object that keep the result of asynchronous operation
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000);
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
});

