

/*
* 一个单独的文件就是一个一个模块，每一个模块都有一个单独的作用域。
* node.js程序由许多模块组成。就是许多文件组成
* 对外引导的借口是exports 和 module.exports
* 加载模块 require
*
*require 优先从缓存中加载，必须是以 ./ 开头表示相对路径。 以 / 开头的路径就是绝对路径，但是不提倡.
*
* 所有的代码都是运行在模块作用域，不会污染全局作用域
* 模块可以多次加载，但是只是在第一次加载时候运行一次
* 然后运行结果就缓存了，易购再加载就直接读取缓存结果
* 模块的加载顺序就是按照其在代码中的出现顺序加载
*
* 核心模块： 的源码在lib子目录中，为了提高运行速度，都是以二进制码为储存方式
* */

/*
	modules loading rules

	1. require prioritizedly load from cache,
		and only load one time even load more.
	
	2. start with ./ and ../ path is the relative path to the current file's directory
	
	3. start with / path is a absolute path from the root
*/
// 1
require('./06_exports.js'); // 06_exports.js module is loading
// require('./06_exports.js');  // null, because its already loaded before.
//
require('./a/a.js'); // a.js module is loading

// require('/a.js'); // a.js from root is loading, after I add a a.js in my root directory





