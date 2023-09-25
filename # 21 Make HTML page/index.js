/*
1. Make folder for HTML file and access it
2. Make HTML files
3. Load html files
4. Interview Questions
 */
const express = require('express');
const path = require('path');

const app = express();

// 1. Make folder for HTML file and access it
const publicpath = path.join(__dirname,'public');
// console.log(publicpath);

app.use(express.static(publicpath));

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});

// 4. Interview Questions
// 1. Where to use path module?
// Ans: To access the folder and files in the folder

// 2. What is the use of express.static()?
// Ans: To load the static files like html, css, js, images etc.

// 3. What is the use of __dirname?
// Ans: To get the current directory path

// 4. What is the use of path.join()?
// Ans: To join the path of two or more files or folders

// 5. What is the use of path.extname()?
// Ans: To get the extension of the file