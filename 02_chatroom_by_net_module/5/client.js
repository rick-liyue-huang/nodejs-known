

"use strict";

const net = require('net');

const client = net.connect({port: 3000, host: '127.0.0.1'});


// 9. we will set a variable nickname, and this variable used 
// to store the username
let nickname;

client.on('connect', () => {

// 1. after the client connects connect successfully, the terminal will show the info to tell
// user what to do next.
	process.stdout.write('please enter username: ');

	// we use 'process.stdin.on' to delete the \n effect
	process.stdin.on('data', (data) => {
		data = data.toString().trim();
		

		//3.  at this time, server will listen the data


// 11. if no username, wil send the asignup protocol data
		if (!nickname) {

			let send = {
				protocol: 'signup',
				nickname: data
			};

		return client.write(JSON.stringify(send)); // 2. and then send data to server
		
		} 

		let arr = data.split(':');

		let send = {};

		if (arr.length == 2) {

			send = {
				protocol: 'p2p',
				from: nickname,
				to: arr[0],
				message: arr[1]
			};
		
		} else if (arr.length == 1) {

			send = {
				protocol: 'broadcast',
				from: nickname,
				message: data
			};
		}

		client.write(JSON.stringify(send));
		
	});
});


client.on('data', (data) => {

	//8.   after 5, 6, 7 step, client will receive the info and define the data format
	// these data is in protocol format
	try {

		// { protocol:'signup',code:'1001',message:'nickname already exists' }
      // { protocol:'signup',code:'1002',message:'nickname  invalid' }
      // { protocol:'signup',code:'1000',message:'ok' }

      	// data = data.toString().trim();
		let signal = JSON.parse(data);

		let protocol = signal.protocol;

		if (protocol === 'signup') {

			switch (signal.code) {


// 10. the nickname is assigned to signal.nickname from server, when user first asignup.
				case '1000':
					nickname = signal.nickname;
					console.log('signup successfully');
					break;
				case '1001':
					console.log('username exists already');
					break;
				case '1002':
					console.log('')
					break;
			}
		} else if (protocol === 'broadcast') {

			console.log(`${signal.nickname} say: ${signal.message}`);
		
		} else if (protocol === 'p2p') {
			let code = signal.code;


// if no code, it is message
			if (!code) {
				console.log(`${signal.from} say to me: ${signal.message}`);
			} else {

				console.log('username does not exist');
			}

		}

	} catch(e) {
		console.log('the received data is abnormal')
	} 
});


client.on('end', () => {

});























