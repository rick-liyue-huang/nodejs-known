

/*
	modules loading rules

	1. require prioritizedly load from cache,
		and only load one time even load more.
	
	2. start with ./ and ../ path is the relative path to the current file's directory
	
	3. start with / path is a absolute path from the root
*/
// 1
require('./06_exports.js'); // 06_exports.js module is loading
require('./06_exports.js');  // null, because its already loaded before.

require('./a/a.js'); // a.js module is loading

require('/a.js'); // a.js from root is loading, after I add a a.js in my root directory





