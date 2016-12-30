

"use strict";

/*

 computer process: a running program
 process method: can used to get some running computer porcess infomation
*/


// 1.when the porgram exits, the process ends.
// setTimeout(() => {
// 	console.log('end');
// }, 10000);



// 2. the following code is to setting the develop environment
// var env = console.log(process.env['NODE_ENV']);
//
// if (env === 'develop') {
// 	console.log('develop environment');
// } else {
// 	console.log('production environment');
// }

// 3. 


console.log(process.mainModule);

/*
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/leo/Documents/git source/nodejs-known/nodepath/2/01_process.js',
  loaded: false,
  children: [],
  paths: 
   [ '/Users/leo/Documents/git source/nodejs-known/nodepath/2/node_modules',
     '/Users/leo/Documents/git source/nodejs-known/nodepath/node_modules',
     '/Users/leo/Documents/git source/nodejs-known/node_modules',
     '/Users/leo/Documents/git source/node_modules',
     '/Users/leo/Documents/node_modules',
     '/Users/leo/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }

*/
console.log(process.memoryUsage());
// { rss: 22880256, heapTotal: 10481664, heapUsed: 4957368 }

// 4. the process sequence when includig asynchromous func

console.log(1);

setTimeout(() => {
	console.log(2);
});

process.nextTick(() => {
	console.log(3);
});
console.log(4);

// 1 4 3 2

// process.nextTick() runs before the setTimeout(), even the timer is 0;
































