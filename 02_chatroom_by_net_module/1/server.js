

"use strict";

const net = require('net');

const server = net.createServer();

let port = 3000;

server.on('connection', (socket) => {

	console.log('some client is connecting to this server.');

	// listen the socket of this server. As long as the socket is abnormal, server
	// will trigger the 'error' event
	socket.on('error', (error) => {
		console.log('the client is exited abnormally.');
	});

// listen the data from client.
	socket.on('data', (data) => {

		// data is in binary format, so need to transfer to string and show in terminal.
		data = data.toString();
		console.log(data); 

		if (data === 'hello') {
			socket.write('world');
		}

	});

});

server.listen(port, '192.168.0.8', () => {
	console.log(`server is listening at port ${port}`);
});


/*

1. 'server is listening at port 3000' in server terminal, when trigger 'connection' event.
2. 'some client is connecting to this server.' in server terminal, when server listen port 3000
3. 'this client connects to server successfully' respondingly show in client terminal, when client trigger 
    'connect' event.
4. client send 'hello' to server.
5. server will trigger the 'data' event and show 'hello', and then send 'world' to client
6. client show 'world' in client terminal.
7. if server exits, client terminal will show 'disconnected from server' by triggerring 'end' event.

*/


























