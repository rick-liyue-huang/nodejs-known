

"use strict";

/*

 callback will do something after the current function finish

*/

function eat (doSomeThing) {
	process.nextTick( () => {
		console.log('begin eat');
		console.log('finish eat');

		doSomeThing && doSomeThing();
	});
}

function callPhone() {
	console.log('call phone');
}

eat(function () {
  console.log('doSomeThing');
});

// function sing() {
//   console.log('sing');
// }

// function sleep() {
//   console.log('sleep');
// }

// function hitSomebody(name) {
//   console.log('hit:' + name);
// }

callPhone();


/*


call phone
begin eat
finish eat
做其它事儿

*/










