

"use strict";

const fs = require('fs');
const path = require('path');

"use strict";

const fs = require('fs');
const path = require('path');

let sourcePath = '/Users/leo/Downloads/HBuilder.app';
let distPath = '/Users/leo/Documents/HBuilder.app';

// get the total size
let totalSize = fs.statSync(sourcePath).size;

// create a read stream
let readStream = fs.createReadStream(sourcePath);

// create a write stream
let writeStream = fs.createWriteStream(distPath);

let curSize = 0;

/*
	the readstream will read the data from sourcepath, and the trigger
	the data method in readStream function
	and then transfer the data to the callback's first argument
	chunk is the similar as buffer
*/

readStream.on('data', (chunk) => {

	curSize += chunk.length;
	let percentage = curSize / totalSize * 100;
	console.log(`already copy ${percentage}`);

	// and then write data by writestream
	writeStream.write(chunk);
});

readStream.on('end', () => {
	writeStream.close();
});







































