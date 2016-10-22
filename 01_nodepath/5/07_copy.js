
"use strict";

const fs = require('fs');
const path = require('path');

let sourcePath = '/Users/leo/Downloads/HBuilder.app';
let distPath = '/Users/leo/Documents/HBuilder.app';

// copy: firstly read and then write
fs.readFile(sourcePath, (err, data) => {
	if (err) {
		throw err;
	}
	fs.writeFile(distPath, data, (err) => {
		if (err) {
			throw err;
		}
		console.log('success');
	});
});