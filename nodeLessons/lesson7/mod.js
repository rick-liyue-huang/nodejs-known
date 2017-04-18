
let a = 12;
let b = 10;
let c = 40;

// exports 
// module.exports.a = a;

console.log(module.exports === exports);

module.exports = {
	a: 12,
	b: 15,
	c: 16
};