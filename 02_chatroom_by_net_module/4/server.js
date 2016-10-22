
"use strict";

const net = require('net');

const server = net.createServer();

let port = 3000;




// define a array to store the sockets (clients)
let users = {};

server.on('connection', (socket) => {

	socket.on('error', (error) => {
		console.log('abnormal');
	});

	

// server listen the client sending message, and do not know the data content
	// so we will define the data format under protocol,

	socket.on('data', (data) => { // the data is in binary format
		data = data.toString().trim(); // the data is in string format
		// console.log(data);

//    we will transfer the JSON string parse to JSON object
		let signal = JSON.parse(data);
		let protocol = signal.protocol;

		switch (protocol) {
			case 'signup':
			 	signup(signal);
			 	break;
			case 'broadcast':
				 broadcast(signal);
				 break;
		}


	});

	function signup(signal) {

		// if the user is exist, will info the user
		if (users[signal.nickname]) {
	  // { protocol:'signup',code:'1001',message:'nickname already exists' }
      // { protocol:'signup',code:'1002',message:'nickname  valid' }
      // { protocol:'signup',code:'1000',message:'ok' }

      	let send = {
      		protocol: 'signup',
      		code: '1001',
      		message: 'nickname already exists'

      		};

      		return socket.write(JSON.stringify(send));
		}
		// here it means that user can signup, and we will put the user in the users object
		users[signal.nickname] = socket;

		// create the user signup successfully message
		let send = {
			protocol: 'signup',
			code: '1000',
			nickname: signal.nickname,
			message: 'ok'
		};
		return socket.write(JSON.stringify(send));
	}


	function broadcast(signal) {
		let send = {
			protocol: 'broadcast',
			nickname: signal.from,
			message: signal.message
		};
		let sendStr = JSON.stringify(send);
		for (let nickname in users) {
			users[nickname].write(sendStr);
		}
	}
});





server.listen(port, '127.0.0.1', () => {
	console.log(`running server at port ${port}`);
});




























