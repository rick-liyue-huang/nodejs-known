

"use strict";


// console.log(process.argv);

/*

[ '/Users/rick/.nvm/versions/node/v6.4.0/bin/node',
  '/Users/rick/Documents/git source/nodejs-known/nodepath/1/07_process.js' ]

  the first arg is the node source code directory
  the second is the file directory

  if we try to type node 08_argv.js 1 
  it will output 

  [ '/Users/rick/.nvm/versions/node/v6.4.0/bin/node',
  '/Users/rick/Documents/git source/nodejs-known/nodepath/1/08_argv.js',
  '1' ]

  so we can simulate a calculator in terminal by input the arguments in terminal
*/

"use strict";

var cal = require('./cal.js');

var args = process.argv.slice(2);

var x = args[0];
var opt = args[1];
var y = args[2];

var result = 0;

switch (opt) {
	case '+' :
	result = cal.add(x, y);
	break;
	case '-' :
	result = cal.sub(x, y);
	break;
	case '*' :
	result = cal.multiply(x, y);
	break;
	case '/' :
	result = cal.divide(x, y);
	break;
}

console.log(result); // 3

/*

console.log(process.argv);

[ '/Users/rick/.nvm/versions/node/v6.4.0/bin/node',
  '/Users/rick/Documents/git source/nodejs-known/nodepath/1/08_argv.js',
  '1',
  '+',
  '2' ]

*/



























