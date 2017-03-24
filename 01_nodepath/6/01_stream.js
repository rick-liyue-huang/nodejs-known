
"use strict";

const fs = require('fs');
const path = require('path');

let sourcePath = '/users/leo/downloads/day1.zip';
let distPath = '/users/leo/desktop/day1.zip';

let totalSize = fs.statSync(sourcePath).size;
let curSize = 0;

//1.create a readStream
let rs = fs.createReadStream(sourcePath);

//2. create a writeStream
let ws = fs.createWriteStream(distPath);

//3.listen the readStream data event, if the event is triggered, we will transfer the first parameters of the callback to writeStream method
// chunk is the data block, so it is the Buffer object

rs.on('data', (chunk) => {
	curSize += chunk.length;
	let percentage = (curSize / totalSize * 100).toFixed(2);
	console.log(`the percentage is: ${percentage} %`);
	ws.write(chunk);
});

//4. we do not know what time the writeStream operation finished, so we use end event to listen.
rs.on('end', (err) => {
	if (err) throw err;
	console.log('successful');
});

rs.pipe(ws);