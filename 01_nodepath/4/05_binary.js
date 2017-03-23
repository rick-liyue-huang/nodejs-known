

"use strict";
const fs = require('fs');

fs.readFile('./README.md', (err, data) => {
	if (err) throw err;
	console.log(data);
	data = data.toString();
	console.log(data);
});
/*

 node defaultly read the file in binary code format

 will get the binary code of

 <Buffer 23 20 4e 6f 64 65 2e 6a 73 20 e7 ac ac e5
  9b 9b e5 a4 a9 e8 af be e7 a8 8b e7 ac 94 e8
  ae b0 0d 0a 0d 0a 2a 2a 2a 0d 0a 0d 0a 23 23 
  20 31 2e 20 e5 a4 ... >
*/

