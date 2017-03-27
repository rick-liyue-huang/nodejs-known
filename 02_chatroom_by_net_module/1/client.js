

"use strict";

const net = require('net');

const client = net.connect({port: 3000});

client.on(`connect`, () => {
	console.log(`the client connect with server`);

	// client will send the data to server.
	process.stdin.on(`data`, (data) => {
		data = data.toString().trim();
		client.write(data);
	})

});

client.on(`data`, (data) => {
	data = data.toString();
	console.log(`the client receive the "${data}" from server`);
});

client.on(`end`, () => {
	console.log(`the client will disconnect with server`);
});























