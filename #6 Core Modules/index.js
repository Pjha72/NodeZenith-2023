
const fs = require('fs');
// Global Modules
console.log("Global Modules");
// Non Global Modules
fs.writeFileSync("test.txt","Hello World");
console.log("->>",__dirname);

// 5. Interview Question
const gs = require('fs').writeFileSync;
gs("gs.txt","Apna Time Aayega");