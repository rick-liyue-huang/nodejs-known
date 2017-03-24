

"use strict";

const fs = require('fs');
const iconv = require('iconv-lite');

 fs.readFile('./a.txt', (err, data) => {
 	if (err) throw  err;

	 let oddBuf = data.slice(0,82);
	 let newBuf = data.slice(83);

	 let str = iconv.decode(data, 'utf8');
	 console.log(str);
	 console.log('===========');
	 console.log(iconv.decode(newBuf, 'utf8'));
 });

 fs.appendFile('./a.txt', '\n海上生明月，天涯共此时', 'utf8', (err) => {
 	if (err) throw err;
	 console.log('success');
 });

 fs.appendFile('./a.txt', '\n床前明月光，疑是地上霜', 'utf8', (err) => {
 	if (err) throw err;
	 console.log('success too');
 });