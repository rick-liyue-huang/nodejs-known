

"use strict";

/*
	fs is the core module
	and know the  asychromous coding
*/

const fs = require('fs');

// console.log(1);

// 1. we must know that all asynchromous code cannot be got in try-catch
// 异步代码无法用 try-catch捕获
// try {
// 	fs.writeFile('./a.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txta.txt', 'added info')
// } catch (e) {
// 	console.log('sorry it is wrong');
// }

// can not output "sorry it is wrong", because it is asynchromous code


// same as setTimeout func

// try {
// 	setTimeout ( () => {
// 		JSON.parse('kjdhkdhdkjhd');
// 	}, 1000);
// } catch (e) {
// 	console.log('sorry');
// }


// 对照之前的异步代码，同步代码可以用try-catch
// try {
// 	JSON.parse('dhksjahduo');
// } catch (e) {
// 	console.log('sorry');
// }

/*
	if no asynchromous

	1
sorry
3

*/

// console.log(3);


 // in all asynchromous code, the return is null

 // so we will define a function to realize the asynchromous 

 // function parseJsonStrToObj(str, callback) {
 //
 // 	process.nextTick( () => {
 // 		try {
 // 			let obj = JSON.parse(str);
 // 			callback(null, obj);
 // 		} catch (e) {
 // 			callback(e, null);
 // 		}
 // 	});
 // }
 // //
 // parseJsonStrToObj('{"cal": "ok"}', (err, obj) => {
 // 	if (err) {
 // 		console.log('sorry is wrong');
 // 	} else {
 // 		console.log('success', obj);
 // 	}
 // });

// function parseJsonToObj(str, callback) {
// 	process.nextTick( () => {
// 		try {
// 			let obj = JSON.parse(str);
// 			callback(null, obj);
// 		} catch (e) {
// 			callback(e, null);
// 		}
// 	});
// }

// parseJsonToObj('{"cal": "ok"}', function (err, obj) {
// 	if (err) {
// 		console.log(',,');
// 	} else {
// 		console.log('success');
// 	}
// });




















































