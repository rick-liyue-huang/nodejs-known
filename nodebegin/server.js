
// var http = require("http");

// http.createServer (function (request, response) {

// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello Rick");
// 	response.end();
// }).listen(8888);



// a simple edition of upper one. here server is object created by http.createServer function.
// var http = require("http");
// var server = http.createServer();
// server.listen(8888);


// var http = require("http");
// var onRequest = function(request, response) {
// 	console.log("request received");
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello Rick");
// 	response.end();
// }
// http.createServer(onRequest).listen(8888);

// console.log("server has started");



// var http = require("http");
// var url = require("url");

// function start(route, handle) {

// 	function onRequest(request, response) {

// 		var pathname = url.parse(request.url).pathname

// 		console.log("request.url: " + request.url); // request.url: /start?foo=bar&hello=world

// 		console.log("url.parse(request.url): " + url.parse(request.url)); 
// 		// url.parse(request.ur): [object Object]

// 		console.log("url.parse(request.url).query: " + url.parse(request.url).query);

// 		console.log("request for " + pathname + " received"); // pathname: /start

// 		route(handle, pathname);

// 		response.writeHead(200, {"Content-Type": "text/plain"});
// 		response.write("Hello Rick");
// 		response.end();
// 	}

// 	http.createServer(onRequest).listen(8888);
// 	console.log("server has started");
// }

// exports.start = start;

// var http = require("http");
// var url = require("url");

// function start(route, handle) {

// 	function onRequest(request, response) {

// 		var pathname = url.parse(request.url).pathname

// 		console.log("request.url: " + request.url); // request.url: /start?foo=bar&hello=world

// 		console.log("url.parse(request.url): " + url.parse(request.url)); 
// 		// url.parse(request.ur): [object Object]

// 		console.log("url.parse(request.url).query: " + url.parse(request.url).query);

// 		console.log("request for " + pathname + " received"); // pathname: /start

// 		route(handle, pathname, response);
// 	}

// 	http.createServer(onRequest).listen(8888);
// 	console.log("server has started");
// }

// exports.start = start;

// var http = require("http");
// var url = require("url");

// function start(route, handle) {

// 	function onRequest(request, response) {

// 		var postData = "";

// 		var pathname = url.parse(request.url).pathname

// 		console.log("request for " + pathname + " received"); // pathname: /start

// 		request.setEncoding("utf8");

// 		request.addListener("data", function(postDataChunk) {
// 			postData += postDataChunk;
// 			console.log("receiving POST data chunk ' " + postDataChunk + " '.");
// 		});

// 		request.addListener("end", function() {
// 			route(handle, pathname, response, postData);
// 		});
		
// 	}

// 	http.createServer(onRequest).listen(8888);
// 	console.log("server has started");
// }

// exports.start = start;


var http = require("http");
var url = require("url");

function start(route, handle) {

	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname

		console.log("request for " + pathname + " received"); // pathname: /start

		route(handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(8888);
	console.log("server has started");
}

exports.start = start;



























































