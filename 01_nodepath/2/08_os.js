

"use strict";

/*
 os core module
*/

const os = require('os');

console.log(os.EOL); // a empty line

console.log(os.arch()); // x64

console.log(os.cpus().length); // 8

console.log(os.freemem()); // 8822734848

console.log(os.hostname()); // huangliyues-MacBook-Pro.local

console.log(os.networkInterfaces()); // 