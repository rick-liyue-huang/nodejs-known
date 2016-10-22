

/*
	the most common application of node.js is the web, here a we simulate a server
	and show the ip and port to outside, and let others visit the server.
	When run the code, a server is open.

	the server ip is 127.0.0.1 and port is 3000

*/  

"use strict";

const http = require('http');

var count = 0;

http.createServer((req, res) => {
	count++;
	res.writeHead(200, {
		'Content-Type': 'text/html; charset=utf-8'
	});
	res.end('<h1> It is so happy, and we buy ' + count + ' iphone7 plus </h1>');
}).listen(3000, '127.0.0.1');

// during the server open, each time we refresh the browser, the count plus one.



























