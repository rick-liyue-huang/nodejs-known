

"use strict";


// this is a core module for net app
const net = require('net');

// 1. we create a 'Server' server, and get the 'server' instance.
const server = net.createServer();

/*
	what we created server used to deal with the client connecting,
	but we cannot inspect when the client will connect with the server,
	so we will deal with client 'connect' request through  watching server's 'connection' event,
	in one word, this is based on the event driven. 
*/ 

// 2. watching server's 'connection' event. as the client connect with the server, the server will trigger the 'connection' event

server.on('connection', (socket) => {
	console.log('some client is connecting...');
});

// 3. open the server 'listen' event, in fact, just let the server run, and also need a listen port.

server.listen(8124, () => {
	console.log('server is running....');
});


/*
	when we type 'nodemon 02_net.js', the terminal will show 'server is running...', which means to open a server.
	and then we open a another terminal ,and type 'telnet 127.0.0.1 8124', the 'server' terminal will show 
	'some client is connecting...', which means to info the server that a client is connecting with this server.
*/





























