/*
1. What is the template engine?
Ans: Template engine is used to create dynamic pages.
    a. What is dynamic pages?
    Ans: Dynamic pages are those pages which are created on the server side.
2. Install ejs template package.
    Ans : npm i ejs
3. Setup dynamic routing
4. Make a dynamic page
5.Interview Questions
*/
const express = require('express');
const path = require('path');

const app = express();

const publicpath = path.join(__dirname,'public');

// Setup template engine
app.set('view engine','ejs');


// Access the view file
app.get('/profile',(req,res)=>{
    const user = {
        name : 'Pawan',
        email : 'pjha2186@gmail.com',
        age : 24
    }
    res.render('profile',{user});
});



app.listen(5000,()=>{
    console.log('Server is running at port 5000');
});
