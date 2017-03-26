
"use strict";

const net = require('net');
const server = net.createServer();
let port = 3000;

let count = 0;
server.on('connection', (socket) => {
	count++;
	console.log(`welcome ${socket.remotePort} join here`);
	console.log(`current has ${count} clients connected`);
	socket.write(`current has ${count} clients connected`);
});

server.listen(port, () => {
	console.log(`server is listening at ${port}`);
});