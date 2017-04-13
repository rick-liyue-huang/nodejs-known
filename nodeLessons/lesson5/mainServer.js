

 const http = require(`http`);
 const fs = require(`fs`);
 const querystring = require(`querystring`);
 const urlLib = require(`url`);

 http.createServer((req, res) => {

 	// GET
 	let obj = urlLib.parse(req.url, true);

 	let url = obj.pathname;
 	const GET = obj.query;
 	

 	// POST
 	let str = ``;
 	req.on(`data`, (data) => {
 		str += data;
 	});
 	req.on(`end`, () => {
 		const POST = querystring.parse(str);
 		console.log(url, GET, POST);
 

 		let file_name = `./www${url}`;
 		fs.readFile(file_name, (err, data) => {
 			if (err) {
 				res.end(`wrong`);
 			} else {
 				res.end();
 			}
 		})

 	});

 	
 	// FILE





 }).listen(6688);

















































