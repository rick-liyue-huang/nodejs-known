

"use strict";

const net = require('net');

const server = net.createServer();

let port = 3000;

server.on('connection', (socket) => {

	console.log('some client connect to this server');

	socket.on('error', (error) => {
		console.log('some client exits abnormally.');
	});


// based on the client said, we will send to the different content.
	socket.on('data', (data) => {
		data = data.toString();
		console.log(data);

		let answer = '';

		switch (data) {
			case 'hello':
				answer = 'world';
				break;

			case 'haha':
				answer = 'heihei';
				break;

			case 'what a u doing':
				answer = 'im working';
				break;

			default:
				answer = 'what?';
				break;
		}

		socket.write(answer);

		
	});
});

server.listen(port, () => {
	console.log(`the server is running at port ${port}`);
});


