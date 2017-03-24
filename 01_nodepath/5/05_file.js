

"use strict";

const fs = require('fs');
const path = require('path');


console.log(__dirname); // /Users/rickhuang/Documents/git source/nodejs-known/01_nodepath/5
fs.exists(__dirname, (exists) => {
	if (exists) {
		console.log('the path is exist'); // the path is exist
	} else {
        console.log('the path is not exist');
	}

});


fs.stat(path.join(__dirname, 'README.md'), (err, states) => {
    if (err) throw err;
    if (states.isFile()) {
        console.log('is file');
    } else if (states.isDirectory()) {
        console.log('is directory');
    }
    console.log(states.mtime.getDate());

});

// rename the file
/*
let oldPath = path.join(__dirname, 'b.txt');
let newPath = path.join(__dirname, 'a.txt');
fs.rename(oldPath, newPath, () => {
	console.log('success');
});
*/

//move file, so we use the same method to rename or move
// let oldPath = path.join(__dirname, 'a.txt');
// let newPath = path.join(__dirname, '../a.txt');
//
// fs.rename(oldPath, newPath, (err) => {
// 	if (err) throw err;
// 	console.log('success too');
// });

let oldPath = path.join(__dirname, '../a.txt');
let newPath = path.join(__dirname, 'a.txt');

fs.rename(oldPath, newPath, (err) => {
	if (err) throw err;
	console.log('success too');
});



//create directory, remember that only create the first subclass dir. path.join(__dirname, 'a', 'b') does not work

fs.mkdir(path.join(__dirname, 'a'), (err) => {
	if (err) throw err;
	console.log('created the new directory');
});


// if want to create the multi subclass use reversion
// loop the data, get the element ,


// only can remove the empty directory. otherwise use reversion function to remove unempty directory.
fs.rmdir(path.join(__dirname, 'a'), (err) => {
	if (err) throw err;
	console.log('removed the dir successful');
});





















