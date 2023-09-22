/*
1. Make file
2. Read file
3. Update file
4. Rename file
5. Delete file
6. Interview Question
*/
// 1. Make file
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/fruit.txt`;
// fs.writeFileSync(`${dirPath}/apple.txt`,'Apple Phone is good');

// 2. Read file
// fs.readFile(filePath,'utf8',(err,data)=>{
//     console.log(data);
// })

// 3. Update file
fs.appendFile(filePath,'I like Apple Phone',(err)=>{
    if(err) throw err;
    console.log('File Updated');
})

// 4. Rename file
fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(err) throw err;
    console.log('File Renamed');
})

// 5. Delete file
fs.unlinkSync(filePath,(err)=>{
    if(err) throw err;
    console.log('File Deleted');
})