/*
1. Set input from command line
2. Create file with input
3. Delete the file with input
4. Interview Question
*/

// console.log(process.argv[2]);
const fs = require('fs');
const input  = process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3], input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else {
    console.log("Invalid Command");
}


