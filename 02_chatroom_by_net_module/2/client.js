

"use strict";

const net = require('net');

// this client is actually the same as the 'socket' in server, and it will 
// be assigned to connect with the port 3000 of server.
const client = net.connect({port: 3000, host: '192.168.0.8'});


// when client connect with server socket successfully, it will trigger the callback func 
client.on('connect', () => {
	console.log('this client connects to server successfully');


// only connect successfully, client can send message to server.
	// client.write('hello');

	process.stdin.on('data', (data) => {
		data = data.toString().trim();
		client.write(data);
	});

});

// receiving data from server trigger the 'data' event,  and show the 'data' in terminal
client.on('data', (data) => {
	console.log(data.toString());
});


// whe client close the socket (exit from terminal), it will trigger the 'end' event.
client.on('end', () => {
	console.log('disconnected from server');
});


























