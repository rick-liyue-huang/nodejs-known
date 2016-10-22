

"use strict";

const fs = require('fs');

const path = require('path');

// we only can create the first class directory in the existed directory

// fs.mkdir(path.join(__dirname, 'b'), (err) => {
// 	if (err) {
// 		throw err;
// 	}

// 	console.log('create dir successfully');
// });

// it will create a directory in current directory.

// rmdir only can remove a empty directory

fs.rmdir(path.join(__dirname, 'b'), (err) => {

	if (err) {
		throw err;
	}

	console.log('remove successfully');
});

