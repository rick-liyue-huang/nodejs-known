

"use strict";

/*
 the loading rule

1.if we write the basename+extname, we will look the path as the absolute path,
	if the path is not exist, will call error.

2. if ommit the extname, we will try the basname folder
	if have the basename folder, we will continue to look for the package.json
	and then search into the package.json, and look for the main property
3. if we can find the "main" property, we will load the main value. here we will load addd.js

4 if we cannot find package.json, or no main property in package.json, or no main value
   the node.js will try to load index.js index.node index.json in the basename folder

*/

var cal = require('./cal'); // ./cal.js cal.node cal.json cal directory

console.log(cal);