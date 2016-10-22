
"use strict";

let buf = new Buffer(10);

// write method is default in utf8 format
buf.write('hello');

console.log(buf);

// if we call write method again, it will ovewrite it again
// buf.write('world');

// console.log(buf);

//  so we will use offset to input the content
buf.write('world', 5);

console.log(buf);

console.log(buf.toString());

// let buf2 = new Buffer('hello world');

// normally we do that
let buf2 = Buffer.from('hello world');

console.log(buf2);
console.log(buf2.toString());


//  determin whether it support the gbk coding format
console.log(Buffer.isEncoding('gbk')); // false

