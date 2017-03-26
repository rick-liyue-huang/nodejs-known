
"use strict";

const net = require('net');

const server = net.createServer();

let count = 0;

// only if client is coming, will automatically assign a parameter (socket) to client
// socket is a writable and readable stream,
server.on('connection', (socket) => {

	console.log(`current has ${++count} comes in`);
	// console.log('some one is comming');
	socket.write('hello world');
	socket.on('data', (data) => {
		console.log(data.toString());
	})
});


//  open server listen, after listen successful will triger callback
server.listen(8124, () => {
	console.log('server is running at port 8124');
});
/*

	the app is similar as 02_net.js, but the 'client' terminal can input the content,
	and show in the 'server' terminal.
	also when the client terminal opens, the welcome message from server is shown in it.
*/



































