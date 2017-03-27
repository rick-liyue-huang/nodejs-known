
"use strict";

const net = require('net');

const server = net.createServer();

let port = 3000;


// define a array to store the sockets (clients)
let clients = [];

server.on('connection', (socket) => {

	socket.on('error', (error) => {
		console.log('abnormal');
	});

	

// when connecting successfully, we push the new client to clients
	clients.push(socket); 

	socket.on('data', (data) => {
		data = data.toString().trim();
		console.log(data);


// loop the clients array, and send the received data to all clients, this is "broadcast"
		clients.forEach((client) => {
			client.write(`${socket.remoteAddress} say: ${data}`);
		})

	});
});

server.listen(port, '127.0.0.1', () => {
	console.log(`running server at port ${port}`);
});