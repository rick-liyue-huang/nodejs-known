


// http module is based on browser and with the defualt protocol

"use strict";

const http = require('http');

const server = http.createServer();

/*

	will listen the 'request' event,
	as long as the client connecting with the server, it will trigger the event.
	if no responding, the server will keep open, 
	when server get request message, it will transfert the request message to request obj
	request is readable stream.
	and also capsulate the socket used to communicate with client to response argument

*/

	server.on('request', (request, response) => {


		// console.log('here has client comming in, and the request path is: ' + request.url);

		// here has client comming in, and the request path is: /

		// response.write('hello');

		// response.write('world');

		// response.end(); // used to end the response.

		// response.end('hello world');

		// request is a readable stream and response is a writeable stream

		 // console.log(request);

		 console.log(request.headers);

		 console.log('request method: ' + request.method); // GET
		 console.log('request path: ' + request.url);  // /
		 console.log('request http protocol editioin: ' + request.httpVersion); // 1.1

		 response.end('hello world');
	});

	server.listen(3000, '127.0.0.1', () => {
		console.log('server is listenin at port 3000');
	});





































