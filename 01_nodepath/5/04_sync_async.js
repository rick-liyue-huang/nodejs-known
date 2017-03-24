

"use strict";

const fs = require('fs');
const path = require('path');

console.log(1);
// this async read files
fs.readFile(path.join(__dirname, 'README.md'), (err, data) => {
	if (err) throw err;
	// console.log(data.toString());
	console.log(2)
});

console.log(3);

let data = fs.readFileSync(path.join(__dirname, 'README.md'));

// console.log(data); // <Buffer 23 20 4e 6f 64 65 2e 6a 73 20 e7 ac ac e4 ba 94 e5 a4 a9 e8 af be e7 a8 8b e7 ac
                  // 94 e8 ae b0 0d 0a 0d 0a 2a 2a 2a 0d 0a 0d 0a 23 23 20 31 2e 20 42 75 ... >
console.log(4); // 1 3 4 2

// the async reading file need the callback, and the data will be called in the callback, whereas the sync reading
//file does not callback.