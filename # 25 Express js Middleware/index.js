/*
1. What are Middlewares?
    Ans : Middlewares are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. 
    The next middleware function is commonly denoted by a variable named next.
2. How to make a middleware
    Ans : app.use(function(req, res, next) {
        // ... You can write your code here
        next();
    });
3. Apply Miffleware on routes
    Ans : app.get('/', function(req, res, next) {
        // ... You can write your code here
        next();
    });
4. Types of Middleware
    Ans : Application-level middleware
        Router-level middleware
        Error-handling middleware
        Built-in middleware
        Third-party middleware
5. Interview Questions
    1. What is middleware in Express?
        Ans : Middleware is a function that is invoked by the Express routing layer before a request is processed by a request handler.
    2. What are the types of middleware?
        Ans : Application-level middleware, Router-level middleware, Error-handling middleware, Built-in middleware, Third-party middleware
*/

const express = require('express');
const path = require('path');

const app = express();

// Middleware
const reqFilter = (req,res,next)=>{
    // console.log('Hello from Middleware');
    if(!req.query.age){
        res.send('Please provide age');
    }
    else if(req.query.age<18){
        res.send('You are not allowed');
    }
    else
        next();
}

app.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/user',(req,res)=>{
    res.send('Welcome, Hello World');
});

app.listen(4000,()=>{
    console.log('Server is running at port 4000');
});