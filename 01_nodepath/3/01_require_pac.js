

"use strict";

var _ = require('underscore');


// underscore used to deal with some methods, some browser cannot support ES5
// so we load the lib to realize these methods.

// _.each([1,23,456], (value, index) => {
// 	console.log(index, value);
// });



// let arr = ['a', 'b', 'c'];
// var arr1 = _.map(arr, (s) => s += '_hello_world');

// console.log(arr);  // [ 'a', 'b', 'c' ]
// console.log(arr1);  // [ 'a_hello_world', 'b_hello_world', 'c_hello_world' ]

console.log(_.random(1000, 9999)); //6746

// console.log(module.paths);

/*

[ '/Users/leo/Documents/git source/nodejs-known/nodepath/3/node_modules',
  '/Users/leo/Documents/git source/nodejs-known/nodepath/node_modules',
  '/Users/leo/Documents/git source/nodejs-known/node_modules',
  '/Users/leo/Documents/git source/node_modules',
  '/Users/leo/Documents/node_modules',
  '/Users/leo/node_modules',
  '/Users/node_modules',
  '/node_modules' ]
*/

// the package searching rule:
/*

	firstly, search node_module from the current directory
	and then, go the the parent directory
	and then do the same thing

*/

















