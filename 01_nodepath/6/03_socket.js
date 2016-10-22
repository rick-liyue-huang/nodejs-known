
"use strict";

const net = require('net');

const server = net.createServer();

let count = 0;

/*
	as long as client connects to server, the server will automatically assign a socket to the first argument
	of the callback func, and call it. Each 'connection' callback argument 'socket' is different.

	we can think in other way, we can act the 'socket' as the 'client'. Because the client is different, the socket
	is different.

*/

server.on('connection', (socket) => {
	console.log(`now have ${count++} clients connect to this server.`);

	// the socket is a readable-writable stream, which means that it can transfer between server and client
	
	// we write something to stream, and will transfer to client
	socket.write('hello world');

	// socket is readable as it listen the 'data' event, and then read out the data from client.
	socket.on('data', (data) => {
		console.log(data.toString());
	});
});

server.listen(8124, () => {
	console.log('server is running at port 8124....');
});


/*

	the app is similar as 02_net.js, but the 'client' terminal can input the content,
	and show in the 'server' terminal.
	also when the client terminal opens, the welcome message from server is shown in it.
*/



































