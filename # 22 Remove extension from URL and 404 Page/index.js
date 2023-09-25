/*
1. Apply get method
2. Remove an extension from URL
3. Make 404 page
4. Apply 404 page
5. Interview Questions
*/
const express = require('express');
const path = require('path');

const app = express();
const publicpath = path.join(__dirname,'public');

app.get('',(req,res)=>{
    res.sendFile(`${publicpath}/index.html`);
});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`);
});

// 3. Make 404 page
app.get('*',(req,res)=>{
    res.sendFile(`${publicpath}/404.html`);
});

app.listen(5000,()=>{
    console.log('Server is running at port 5000');
});

// 5. Interview Questions
// 1. What is the difference between app.get() and app.use()?
// Ans : app.get() is used to get the data from the server and app.use() is used to use the middleware.

// 2. What is the difference between app.get() and app.post()?
// Ans : app.get() is used to get the data from the server and app.post() is used to post the data to the server.

// 3. What is the difference between app.get() and app.all()?
// Ans : app.get() is used to get the data from the server and app.all() is used to get all the data from the server.

// 4. What is the difference between app.get() and app.listen()?
// Ans : app.get() is used to get the data from the server and app.listen() is used to listen the port of the server.

// 5. How to load a file by using get method?
// Ans : By using res.sendFile() method.
