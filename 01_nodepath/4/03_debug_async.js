
"use strict";

let foo = 'bar';

console.log(1);

process.nextTick(() => {
	console.log(2);
});

console.log(3);

// 1 3 2
// a review about the asynchromous code

