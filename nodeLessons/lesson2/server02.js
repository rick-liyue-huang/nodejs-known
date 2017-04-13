
"use strict";

const http = require(`http`);
const fs = require(`fs`);

let server = http.createServer((req, res) => {

	// req.url => '/index.html'
	//  read => './www' + req.url

	let file_name = `./www${req.url}`;

	fs.readFile(file_name, (err, data) => {
		if (err) {
			throw err;
		}
		res.end(data);
	});
});

server.listen(6688, () => {
	console.log(`the server is listening the port 6688`);
});