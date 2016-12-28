

/*

global 
in node.js, it also has one global object: the declaired variable, function and object
are all default as global for the current module. 
one file is a module, so the 'global' is for the current file.

it usually include
__dirname, __filename

setTimeout() clearTimeout()
setInterval() clearInterval()

console
exports
module
process
require
Buffer

*/

/*
* These objects are available in all modules. Some of these objects aren't actually in the
* global scope but in the module scope - this will be noted.

 The objects listed here are specific to Node.js. There are a number of built-in objects
 that are part of the JavaScript language itself, which are also globally accessible.
* */


"use strict";

const cal = require('./cal.js');

console.log(`cal object: ${cal.add}`); 
/*
cal object: (x, y) => {
	return parseFloat(x) + parseFloat(y);
}
*/ 

var foo = 'bar';

// we need to asssign the foo to global.foo manually.
// global.foo = foo;


// if we cancel  'global.foo = foo; ' in the curent file, it will load cal.js global.foo
console.log(global.foo);







































