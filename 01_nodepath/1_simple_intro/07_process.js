

"use strict";

/*
	process

	used to deal with the program process
*/

// setTimeout(() => {
// 	console.log('hello world')
// }, 3000);



// abort() method can abort the process immediately, it will abort the upon setTimeout func.
// and also produce a core file.
// process.abort();

// arch can get the operator system bit number x64 x86 

// console.log(process.arch);   // X64

/*
* The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.
* The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed.
* The second element will be the path to the JavaScript file being executed.
* The remaining elements will be any additional command line arguments.
* */
// console.log(process.argv);
// console.log(process.argv0); // node

/*
[ '/Users/leo/.nvm/versions/node/v6.4.0/bin/node',
  '/Users/leo/Documents/git source/nodejs-known/nodepath/1/07_process.js' ]

*/

 console.log(process.argv);


































