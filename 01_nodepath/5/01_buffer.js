
"use strict";

let buf = new Buffer(10);
var iconv = require('iconv-lite');

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
let buf2 = Buffer.from('hello world haha');
console.log(buf2);
console.log(buf2.toString());


//  determin whether it support the gbk coding format
console.log(Buffer.isEncoding('utf8')); // true


let str = iconv.decode(buf2, "gbk");
console.log(str);



let gbk_buf = iconv.encode('今天天气不错', 'gbk');

let buf3 = Buffer.from(gbk_buf);
console.log(buf3);

console.log(buf3.toString());

console.log(iconv.decode(buf3, 'gbk'));




























