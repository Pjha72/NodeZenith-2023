/*
1. Make files in a floder
2. Use path module
3. Get file names and print
4. Interview Question
*/

const fs = require('fs');
// 2. Use path module
const path = require('path');
const dirPath = path.join(__dirname,'/files');
console.log(dirPath);

// 1. Make files in a floder
// fs.writeFileSync('apple.txt','Apple Phone is good');

// for(i=0;i<5;i++){
    // New way
    // fs.writeFileSync(`${dirPath}/hello${i}.txt`,`Apple Phone is good`);
    // Old way
    // fs.writeFileSync(dirPath+'/hello'+i+'.txt','Apple Phone is good');
// }

// 3. Get file names and print
fs.readdir(dirPath,(err,files)=>{
    // console.log(files);
    files.forEach((file)=>{
        console.log(file);
    });
})

// 4. Interview Question
// 1. Can we access the file outside the node file?
// Ans : No, we can't access the file outside the node file.

