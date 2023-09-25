/*
1. Call Stack : It is a stack data structure that stores information about the function calls. It is used for function invocation. Whenever a function is called, a new frame is pushed into the call stack. Whenever a function returns, the frame is popped from the call stack. The call stack is synchronous. It means that only one function can be pushed on the call stack at a time. The function that is at the top of the call stack is executed first, and the function at the bottom is executed last.
2. Node APIs : It is a set of APIs that are provided by Node.js to perform asynchronous operations. These APIs are not part of the JavaScript language, rather they are built on top of the JavaScript engine. These APIs are written in C/C++ and are used to perform asynchronous operations. These APIs are non-blocking. It means that the execution of the program will not wait for the asynchronous operation to complete. Instead, it will register a callback function and continue with its execution. When the asynchronous operation completes, the callback function is pushed to the callback queue.
3. Callback Queue : It is a queue data structure that stores the callback functions. When the asynchronous operation completes, the callback function is pushed to the callback queue. The callback queue is also known as the event queue.
4. Example
5. Interview Questions
*/

console.log("Stating up");
setTimeout(()=>{
    console.log("2 second wait");
},2000);

setTimeout(()=>{
    console.log("0 second wait");
},0);
console.log("Finishing up");

//  Nodejs Architecture : Call Stack ---> Node APIs ----> Callback Queue