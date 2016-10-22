

"use strict";

const fs = require('fs');

const path = require('path');

fs.exists('/Users/leo/Documents/git source/nodejs-known/nodepath/5', (exists) => {
	if (exists) {
		console.log('the path is exist');
	} else {
		console.log('the path is not exist');
	}
});


// get the file or directory info

fs.stat(path.join(__dirname, 'README.md'), (err, stats) => {
	if (err) {
		throw err;
	}
	if (stats.isFile()) {
		console.log('is file');
		// console.log(stats);
	} else if (stats.isDirectory()) {
		console.log('is directory');
	}


});


// rename the file name

// let oldPath = path.join(__dirname, 'a.txt');
// let newPath = path.join(__dirname, 'b.txt');

// fs.rename(oldPath, newPath, (err) => {
// 	if (err) {
// 		throw err;
// 	}

// 	console.log('success');
// });

// move file, rename file also can move the file, 

let oldPath = path.join(__dirname, 'b.txt');
let newPath = path.join(__dirname, '../b.txt');

fs.rename(oldPath, newPath, (err) => {
	if (err) {
		throw err;
	}
	console.log('success');
}); 
































