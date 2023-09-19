// 1. Make Basic Server
const http = require('http');
// Http : Node js ke under request and Response ko handle kerta hai
// http.createServer((req,res)=>{
    
// }).listen(8000);

// 2. Function as parameter in node
function dataControl(req,res){
    res.write("<h1>Hello this is Pawan</h1>");
    res.end();
}
http.createServer(dataControl).listen(8000);
// 3. Arrow Function
const dataControl2 = (req,res)=>{
    res.write("<h1>Pawan Jha</h1>");
    res.end();
}
http.createServer(dataControl2).listen(9000);
// 4. Get output on Browser
// 5. Interview Question
// Request and respone ko manage kaise kerta hai node js?
// Ans : By using http module

