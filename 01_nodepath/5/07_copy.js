
"use strict";

const fs = require('fs');
const path = require('path');

/*
// this is a small file , its ok
let sourcePath = path.join(__dirname, 'README.md');
let distPath = '/Users/rickhuang/desktop/README.md';

fs.readFile(sourcePath, (err, data) => {

	if (err) throw err;
	fs.writeFile(distPath, data, (err) => {
		if (err) throw err;
		console.log('success');
	});
});
*/
// we will use the large file
let sourcePath = path.join('/users/rickhuang/downloads/angular2', 'ng2screencast-v2.mp4');
let distPath = '/users/rickhuang/desktop/ng2screencast-v2.mp4';

fs.readFile(sourcePath, (err, data) => {
	if (err) throw err;
	fs.writeFile(distPath, data, (err) => {
		if (err) throw err;
		console.log('successful');
	});
});



































