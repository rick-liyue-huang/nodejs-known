

"use strict";

//  timer

// in JS, timer is not too exactly
// so we will use console.time and console.timeEnd

// time and timeEnd used to count a paragraph of code running time

//  and they match each other by the time tamp

console.time('timer');

for (var i = 0; i < 100000; i++) {

}
console.timeEnd('timer'); // timer: 0.816ms

/*

	in node.js, especially i asynchromous code, do not write the 
	large quntity of code , such as fabrucci array
	and do not write the large quantity for loop

*/ 


const fs = require('fs');

fs.readFile('./README.md', (err, data) => {

	// priopritately define whether has error or not
	if (err) {
		throw err;
	}

	// if has not error object, we will continue the correct code.
	// .....
});


































