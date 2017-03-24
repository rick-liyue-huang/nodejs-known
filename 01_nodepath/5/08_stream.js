
"use strict";

const fs = require('fs');
const path = require('path');

let sourcePath = path.join('/users/rickhuang/downloads/angular2', 'ng2screencast-v2.mp4');
let distPath = '/users/rickhuang/desktop/ng2screencast-v2.mp4';

let totalSize = fs.statSync(sourcePath).size; // the total siz of source file

//create read stream
let readStream = fs.createReadStream(sourcePath);

//create write stream
let writeStream = fs.createWriteStream(distPath);

let curSize = 0;


// readstream continuely read data
readStream.on('data', (chunk) => {

	// get progress bar
	curSize += chunk.length;
	let percentage = curSize / totalSize * 100;
	console.log(`already copy: ${percentage} %`);
	writeStream.write(chunk);
});

// when finish the write file, it will close
readStream.on('end', () => {
	writeStream.close();
});































