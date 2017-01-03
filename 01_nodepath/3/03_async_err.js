

"use strict";



// ========= synchromous code abnormal 

// function parseJsonStrToObject(str) {
// 	let jsonObj = JSON.parse(str);
// 	return jsonObj;
// }

// console.log(1);

// try {
// 	console.log(2);
// 	parseJsonStrToObject('kahaklhdjk');
// } catch (e) {
// 	console.log('wrong');
// }

// console.log(3);

// 1 2 wrong 3

// ========= synchromous code abnormal


// =========== try catch cannot catch the wrong from asynchromous code

// function parseJsonStrToObj (str, callback) {
// 	process.nextTick( () => {
// 		var jsonObj = JSON.parse(str);
// 		// return jsonObj; // in asynchromous code return does work
// 		callback(jsonObj);
// 	});
// }

// try {
// 	parseJsonStrToObj('hdhkd', (obj) => {
// 		console.log(obj);
// 	})
// } catch (e) {
// 	console.log('wrong');
// }

// get abnormal

// =========== try catch cannot catch the wrong from asynchromous code


// ==================cannot differentiate the success and wrong ============
// function parseJsonStrToObj(str, callback) {
//   process.nextTick(function() {
//     try {
//       var jsonObj = JSON.parse(str);
//       callback(jsonObj); 
//     } catch (e) {
//       callback(e); 
//     }
//   });
// }


// parseJsonStrToObj('dsafasfas',function (obj) {
//   if (typeof obj === 'object') {
//     console.log(obj);
//   }
// });
// ================== cannot differentiate the success and wrong ============



// ============= encapsulate the asynchromous function

// function parseJsonStrToObj (str, callback) {
//
// 	process.nextTick ( () => {
//
// 		try {
// 			let jsonObj = JSON.parse(str);
// 			callback(null, jsonObj);
// 		} catch (e) {
// 			callback(e, null);
// 		}
// 	});
// }

// under the formal rule, the first arg is err object

// parseJsonStrToObj('{"foo": eee"bar"}', (err, obj) => {
// 	if (err) {
// 		return console.log('wrong'); // firstly execute console.log then execute return.
// 	}
// 	console.log('data is correct ', obj);
// });































