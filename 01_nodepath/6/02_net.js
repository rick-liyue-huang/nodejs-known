"use strict";

const net = require('net'); // net module provides you with an asynchronous network warapper

// create a server instance
const server = net.createServer((client) => {
	console.log('some client is comming in');
});

// when get wrong , will trigger error event
server.on('error', (err) => {
	console.log(`server is wrong: ${err}`);
});


// connection used to listen server's connection event, to deal with connection request.
server.on('connection', (socket) => {
	console.log('some client is coming ');
});

//let server listen the port, and listening, by the port
server.listen(8124, () => {
	console.log('server is running');
});

//use telnet 127.0.0.1 8124 to simulate the client comes




























