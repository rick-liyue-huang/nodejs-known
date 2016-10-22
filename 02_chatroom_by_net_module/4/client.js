
"use strict";

const net = require('net');

// this client is actually the same as the 'socket' in server, and it will 
// be assigned to connect with the port 3000 of server.
const client = net.connect({port: 3000, host: '127.0.0.1'});

let nickname;

// when client connect with server socket successfully, it will trigger the callback func 
client.on('connect', () => {
	
	process.stdout.write('please input the username: ');

	process.stdin.on('data', (data) => {
		data = data.toString().trim();


// if username is not exist, we will send the register data
		if (!nickname) {

			let send = {
				protocol: 'signup',
				nickname: data
			};
			// because network only can transfer the binary data
			// we will transfer the JSON object to JSON string
			// and then socket port will transfer the string to binary data
			return client.write(JSON.stringify(send));
		}


		// after signup, we will send broadcast
		let send = {
			protocol: 'broadcast',
			from: nickname,
			message: data
		};
		client.write(JSON.stringify(send));
	});

});

// receiving data from server trigger the 'data' event,  and show the 'data' in terminal
client.on('data', (data) => {

	data = data.toString().trim();
	
	try {

		let signal = JSON.parse(data);

		let protocol = signal.protocol;

		if (protocol === 'signup') {

			switch(signal.code) {
				case '1000':
					nickname = signal.nickname;
					console.log('singup successfully');
					break;

				case '1001':
					console.log('username exist already');
					break;

				case '1002':
					console.log('usename format is not correct');
					break;
			}

		} else if (protocol === 'broadcast') {
			console.log(`${signal.nickname} say: ${signal.message}`);
		}

	} catch(e) {
		console.log('the data from server is abnormal');
	}
});


// whe client close the socket (exit from terminal), it will trigger the 'end' event.
client.on('end', () => {
	console.log('disconnected from server');
});


































