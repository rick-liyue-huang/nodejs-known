
"use strict";

const fs = require('fs');
const path = require('path');

let sourcePath = 'D:/Softwares/OS/ubuntu-15.04-desktop-amd64.iso';
let distPath = 'C:/Users/rick/Desktop/ubuntu-15.04-desktop-amd64.iso';


// get the file size
let totalSize = fs.statSync(sourcePath).size;

// 1. create a readstream
let rs = fs.createReadStream(sourcePath);

// 2. create a writeStream
let ws = fs.createWriteStream(distPath);

var surSize = 0;

// 3. watch the readstream data event, if the 'data' event is triggered, we will put the 
// first argument of the callback func 'chunk' to the curSize

rs.on('data', (chunk) => {
	curSize += chunk.length;

	let percentage = (curSize / totalSize * 100).toFixed(2);

	console.log(percentage);
// 4. and we also add the chunk into the ws
	ws.write(chunk);
});


// 5. we do not know what time the rs will end, but we can watch the 'end' event of rs, 
rs.on('end', () => {

	// 6. when we watched the 'end' event, we 'close' ws.
	ws.close();
});


// 7. we also can replace the upon lines by just one line code in pipe func

// rs.pipe(ws);


































