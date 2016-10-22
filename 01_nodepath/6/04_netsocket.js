

"use strict";

const net = require('net');

const server = net.createServer();

let count = 0;

let port = 3000;


// as long as one client connecting to the server, server will asign a socket to communicate with client
server.on('connection', (socket) => {

	count++;
	console.log(`welcome ${socket.localAddress} ${socket.remotePort} to connect our server`);
	console.log(`now has ${count} clients connecting`);

	socket.write(`now has ${count} clients connecting`);

	socket.on('data', (data) => {
		console.log(data.toString());
	})


});

server.listen(port, () => {
	console.log(`server is running at port ${port}.....`);
});