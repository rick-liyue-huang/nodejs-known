

"use strict";

const fs = require('fs');
const path = require('path');

console.log(path.basename('./foo/bar/baz/asdf/quux.html')); // quux.html

console.log(path.extname('./foo/bar/baz/asdf/quux.html')); // .html

let dirname = path.dirname('/foo/bar/baz/asdf/quux.html');
console.log(dirname); // /foo/bar/baz/asdf

console.log(path.isAbsolute('./foo/bar/baz/asdf')); // false

console.log(path.join(dirname, 'ok.txt')); // /foo/bar/baz/asdf/ok.txt

console.log(path.join(dirname, '/kkk', '/haha', 'ok.css')); // /foo/bar/baz/asdf/kkk/haha/ok.css

console.log(path.join(dirname, './hah', 'index.html')); // /foo/bar/baz/asdf/hah/index.html

//we will operates the files in absolute path.


console.log(path.parse('./foo/bar/baz/asdf/hah/index.html'));

/*
* { root: '/',
 dir: '/foo/bar/baz/asdf/hah',
 base: 'index.html',
 ext: '.html',
 name: 'index' }
* */

console.log(path.format({ root: '/',
    dir: '/foo/bar/baz/asdf/hah',
    base: 'index.html',
    ext: '.html',
    name: 'index' }));  // /foo/bar/baz/asdf/hah/index.html

console.log(path.format({
    root: '/',
    dir: '/ha/haa',
    base: 'index.css',
    ext: '.css',
    name: 'index'
})); // /ha/haa/index.css

console.log(path.join('/foo/bar/baz', '../ok', 'index.js')); // /foo/bar/ok/index.js here ok replace baz

console.log('/foo/bar/ok/index.js'.split(path.sep)); // [ '', 'foo', 'bar', 'ok', 'index.js' ]

// will convert to the array by "/"







