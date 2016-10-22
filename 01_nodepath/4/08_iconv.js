

"use strict";

const fs = require('fs');
const iconv = require('iconv-lite');


fs.writeFile('./c.txt', iconv.encode('大家好', 'utf8'), (err) => {
	if (err) {
		throw err;
	}

	console.log('success');
});

// it will get a new file named c.txt, and the content is encode by gbk.

// fs.readFile('./c.txt', 'utf8', (err, data) => {
// 	if (err) {
// 		throw err;
// 	}
// 	// console.log(data.toString())

// 	let newString = iconv.decode(data, 'utf8');
// 	console.log(newString);
// });


fs.appendFile('./c.txt', '\n 大家再见', 'utf8', (err) => {
	if (err) {
		throw err;
	}
	console.log('success');
});

// it will append the data "大家再见" in the c.txt.

