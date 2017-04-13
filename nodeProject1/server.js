
	"use strict";

	const http = require(`http`);
	const url = require(`url`);

//  call one of the functions the http module offers: createServer, this function returns an object
//  and thsi object has a method named listen, and takes a numeirc value which indicates the port
//  number our HTTP server is going to listen on.

//  we will then add url module
	
	// we will loosely couple server and router by injecting this dependency;
	function start (route, handle) {

		function onRequest(req, res) { // 'req' and 'res' are both objects

			console.log(`some clients are coming....`);

			console.log(`req.url: ${req.url}`); // req.url: /start?user=rick&pass=1234
			let pathname = url.parse(req.url).pathname;
			console.log(`url pathname: ${pathname}`); // url pathname: /start
			console.log(`url query: ${url.parse(req.url).query}`); // url query: user=rick&pass=1234

			// let content = route(handle, pathname); // About to route a request for /start

			// res.writeHead(200, {"Content-Type": "text/html"});
			// res.write(content);
			// res.end();

			route(handle, pathname, res);
		}

		http.createServer(onRequest).listen(3000, () => {
			console.log(`the server is listening the port 3000`);
		});
	}

	exports.start = start;

































	



