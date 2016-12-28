
/*
From begin, we will use the ES6, the seconde example is about how to read file from
outside and show the content of file in console.
a fs core module is necessary.
*/ 

"use strict";

const fs = require("fs");

fs.readFile('./README.md', (err, data) => {
	console.log(data.toString());
});



