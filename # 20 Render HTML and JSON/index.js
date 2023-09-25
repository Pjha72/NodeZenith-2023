/*
1. How HTML tags
2. Show json data
3. Link Pages
4. Interview Questions
*/

const express = require('express');
const app = express();

app.get('',(req,res)=>{
    // console.log('Data sent by browser to server : ', req.query.name);
    res.send(`
        <h1>Hello World!, This is Home Page</h1>
        <a href='/about'>About</a>
    `);
});

app.get('/about',(req,res)=>{

    res.send(`
        <input type='text' placeholder='Enter your name' value = "${req.query.name}" />
        <button>Submit</button>
    `);
});

app.get('/json',(req,res)=>{
    res.send([{
        name :"Pawan",
        mail : "dfgf23@gmail.com",
        age : 23
    }
    ,{
        name :"Pawan Jha",
        mail : "df23@gmail.com",
        age : 25
    }]);
});



app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});

/*
    Server(Response) ====> CLient(Request)
*/