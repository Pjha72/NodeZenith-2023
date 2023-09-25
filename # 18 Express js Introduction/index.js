const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send('Hello World!, This is Home Page');
});

app.get('/about',(req,res)=>{
    res.send('Hello World!, This is About Page');
});

app.listen(4000,()=>{
    console.log('Server is running on port 4000');;
});