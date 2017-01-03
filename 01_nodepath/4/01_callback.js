/*
* 将一个函数作为参数传递给另一个参数，并且通常在第一个函数执行完成后被调用
* */

"use strict";

//  timer

// in JS, timer is not too exactly
// so we will use console.time and console.timeEnd

// time and timeEnd used to count a paragraph of code running time

//  and they match each other by the time tamp

console.time('timer');

for (var i = 0; i < 1000000; i++) {

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

console.time('1000ms timer');
setTimeout( () => {
	console.timeEnd('1000ms timer');
	console.log('1s');
}, 10000);

console.time('3000ms timer');
setTimeout( () => {
	console.timeEnd('3000ms timer');
	console.log('3s');
}, 30000);


































