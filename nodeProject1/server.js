
	"use strict";

	// let's start with the server module

	// it will require the http module that ships with Node.js and makes it accessible through the variable http
	const http = require(`http`);
	const url = require(`url`);


	// encap a function "start"
	function start(route, handle) {

		// call one functions the http module offers: createServer, and it will return an object

		// two parameters, req and res are two objects, which have their methods to handle the details of the HTTP
		// request that occured and to respond to the request.
		http.createServer((req, res) => {

			// by the imported "url" module, we can confirm the url pathname.
			// this allows us to map requests to our request handlers based on the URL path using our router.
			let pathname = url.parse(req.url).pathname;
			console.log("Request for " + pathname + " received");

			//  inject route function as parameter of start function
			route(handle, pathname);

			// whenever a request is received, it uses the response.writeHead() function to send an HTTP status
			//  200 and content-type in the HTTP response header.
			res.writeHead(200, {"Content-Type": "text/plain"});

			let content = route(handle, pathname);

			// and the response.write() function to send the text "hello world" in the HTTP response body.
			res.write(content);
			res.end();

			// this object has a method 'listen' and takes anumeric value which indicates the port number 
			// our HTTP server is going to listen on.
		}).listen(3000);

		console.log(`server has started`);
	}


	module.exports.start = start;





























