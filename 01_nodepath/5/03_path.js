

"use strict";

const path = require('path');

// basename 

console.log(path.basename('/foo/bar/baz/asdf/quux.html')); // quux.js


// dirname
console.log(path.dirname('/foo/bar/baz/asdf/quux.html')); // /foo/bar/baz/asdf

console.log(path.extname('/foo/bar/baz/asdf/quux.html')); // .html

// we control the file in absolute path

console.log(path.join(__dirname, 'README.md'));
// /Users/rick/Documents/git source/nodejs-known/nodepath/5/README.md

console.log(path.parse('/Users/rick/Documents/git source/nodejs-known/nodepath/5/README.md'));

/*

{ root: '/',
  dir: '/Users/rick/Documents/git source/nodejs-known/nodepath/5',
  base: 'README.md',
  ext: '.md',
  name: 'README' }
huangliyues-MacBook-P


*/

console.log(path.format({

	root: '/',
  dir: '/Users/rick/Documents/git source/nodejs-known/nodepath/5',
  base: 'README.md',
  ext: '.md',
  name: 'README' 
}));

//  /Users/rick/Documents/git source/nodejs-known/nodepath/5/README.md

// we always use path.join() method to concat the path

console.log(path.join('/foo/bar/baz', 'asdf', '../quux.html')); // /foo/bar/baz/quux.html

console.log(path.sep); // /
































