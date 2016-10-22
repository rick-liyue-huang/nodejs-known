

"use strict";

const fs = require('fs');
const path = require('path');

console.log(1);

// asynchromously get the file content

// fs.readFile(path.join(__dirname, 'README.md'), 'utf8', (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log(2);
// }) ;

console.log(3);

// 1 3 2


// synchromously get file content
try {
	let data = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8', (err, data) => {
		console.log(data);
	});
} catch(e) {
	console.log('wrong');
}
