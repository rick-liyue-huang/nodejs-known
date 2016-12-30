

"use strict";

/*
 the loading rule

1.if we write the basename+extname, we will look the path as the absolute path,
	if the path is not exist, will call error.

2. if omit the extname, we will try the basename folder
	if have the basename folder, we will continue to look for the package.json
	and then search into the package.json, and look for the main property
3. if we can find the "main" property, we will load the main value. here we will load addd.js

4 if we cannot find package.json, or no main property in package.json, or no main value
   the node.js will try to load index.js index.node index.json in the basename folder

   当node.js加载一个路径形式的模块的时候， 如果有后缀直接加载，否则报错。
   如果没有后缀名，会按照 .js,  .node, .json 的后缀名顺序来加载，如果没有
   就得到一个./的目录。
   在这个目录中默认有一个文件 package.json 文件，里面有 有一个对象，其中包括一个'main' 的属性，将按照里面的main的值来访问指定入口模块文件的名称
   如果没有package.json文件，则加载index.js文件， 如果没有 .js后缀，则 访问 .js .node .json的后缀名的文件。
   如果最后什么都没有，就会报错。

*/

var cal = require('./cal'); // ./cal.js cal.node cal.json cal directory

console.log(cal);


































