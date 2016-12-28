
"use strict";

var foo = 'baz';
// exports.foo = foo;

global.foo = foo;

exports.add = (x, y) => {
	return parseFloat(x) + parseFloat(y);
};
exports.sub = (x, y) => {
	return parseFloat(x) - parseFloat(y);
};
exports.multiply = (x, y) => {
	return parseFloat(x) * parseFloat(y);
};
exports.divide = (x, y) => {
	return parseFloat(x) / parseFloat(y);
};

