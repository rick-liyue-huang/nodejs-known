

"use strict";

const fs = require('fs');

// read file

let begin = +new Date();

fs.readFile('./likeyou.lrc', (err, data) => {
	if (err) {
		throw err; // after throw error, the process will end
	}

	// the reading file is default as binary system
	// so we need to resolve the code to string
	data = data.toString();

	// console.log(data);

	// slplit the string to array
	let lines = data.split('\n');

	// console.log(lines);

	let regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;

	lines.forEach( (line, index) => {

		let maches = regex.exec(line);

		if (maches) {
			let m = maches[1];
			let s = maches[2];
			let ms = maches[3];
			let content = maches[4];

			let offset = +new Date() - begin;

			// get time

			let time = parseInt(m) * 60 * 1000 + parseInt(s) * 1000 + parseInt(ms) - offset;

			// console.log(time);

			setTimeout( () => {
				console.log(content);
				console.log(time);
			}, time);
		}
	});


});































