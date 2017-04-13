
"use strict";

const http = require(`http`);
const querystring = require(`querystring`);
const urlLib = require(`url`);

let server = http.createServer((req, res) => {

	let obj = urlLib.parse(req.url, true);
	console.log(req.url);
	let url = obj.pathname;
	let GET = obj.query;


	// we will use url lib, so comment the following codes

	// let GET = {};
	// let url;

	// if (req.url.indexOf(`?`) !== -1) {

	// 	// console.log(`some clients is comming`);
	// 	// console.log(req.url); // /?username=hahajk&pass=ddd

	// 	let arr = req.url.split(`?`);
	// 	url = arr[0];

	// 	/*
	// 	let arr2 = arr[1].split(`&`);

	// 	for (let i = 0; i < arr2.length; i++) {
	// 		let arr3 = arr2[i].split(`=`);
	// 		GET[arr3[0]] = arr3[1];
	// 	}

	// 	*/

	// 	GET = querystring.parse(arr[1]);
	// } else {
	// 	url = req.url;
	// }
	
	console.log(url, GET);

	res.end(`the form`);

});

server.listen(6688, () => {
	console.log(`the server is listening the port 6688`);
});






























