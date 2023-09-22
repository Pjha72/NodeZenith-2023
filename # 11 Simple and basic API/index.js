
/*
1. Make a server.
2. Create header and API body.
3. Create an API with static data.
4. Put data in another file.
5. Interview Question.
*/
const http = require('http');
const data = require('./data.js');
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);