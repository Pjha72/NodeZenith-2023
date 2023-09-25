const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log('Data sent by browser to server : ', req.query.name);
    res.send('Hello World!, This is Home Page : '+req.query.name);
});

app.get('/about',(req,res)=>{
    res.send('Hello World!, This is About Page');
});

app.listen(4000,()=>{
    console.log('Server is running on port 4000');;
});

/*
    Server(Response) ====> CLient(Request)
*/