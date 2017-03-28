
"use strict";

const http = require(`http`);
const path = require(`path`);
const fs = require(`fs`);
const server = http.createServer();
let port = 3000;


// each time client send request will trigger the "request" event
// and then encap the request info as "req" the first parameter of the callback.
//at last encap the response info as "res" the second parameter of the callback, and send back client.
server.on(`request`, (req, res) => {
	console.log(`some client is connecting with me....`);
	// res.write(`hello world!`); // write before end method
	// res.end();

	// console.log(req.headers);
	// console.log(req.method); // GET
	// console.log(req.url); // /
	// console.log(req.httpVersion); // 1.1

	// get the request url,
	let url = req.url;

	console.log(`the current req.url is ${url}`);

	// determine the different response based on the different req.url
	switch (url) {
		case `/`:
			// res.end();
			fs.readFile(path.join(__dirname, `index.html`), (err, data) => {
				if (err) throw err;
				res.end(data);
			});
			break;
		case `/login`:
			// res.end(`login site`);
			fs.readFile(path.join(__dirname, `login.html`), (err, data) => {
				if (err) throw err;
				res.end(data);
			});
			break;
		case `/register`:
			res.end(`register site`);
			break;
		case `/about`:
			res.end(`index site`);
			break;
		case `/favicon.ico`:
			res.end();
			break; // deal with the favicon.ico
		case `/main.css`: // this all dynamic reading the content.
			fs.readFile(path.join(__dirname, `main.css`), (err, data) => {
				if (err) throw err;
				res.end(data);
			});
			break;
		case `/main.js`:
			fs.readFile(path.join(__dirname, `main.js`), (err, data) => {
				res.end(data);
			});
			break;
		case `/01.jpg`:
			fs.readFile(path.join(__dirname, `01.jpg`), (err, data) => {
				res.end(data);
			});
			break;
		default:
			res.end(`404 unfound`);
			break;
	}

	// res.end(`hello world`); // easier way


});

server.listen(port, () => {
	console.log(`the server is listening the port of ${port}`);
});