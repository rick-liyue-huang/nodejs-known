

"use strict";

const fs = require('fs');

fs.readFile('./life.ipeg', (err, data) => {
	if (err) {
		throw err;
	}
	console.log(data);
});