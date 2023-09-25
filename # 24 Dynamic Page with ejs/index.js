/*
1. How to make Loop in ejs
2. Make Header file
3. Show common header file
4. Interview QUestion
*/
const express = require('express');
const path = require('path');

const app = express();

// set view engine
app.set('view engine','ejs');

app.get('/hello',(req,res)=>{
    const user = {
        name : "Pawan",
        email : "pjha2186@gmail.com",
        city : "Mumbai",
        skills : ['Nodejs','C++', 'SQl','Reactjs']
    }
    res.render('hello',{user});
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});