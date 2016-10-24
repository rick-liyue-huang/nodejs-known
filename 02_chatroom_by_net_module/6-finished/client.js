
//


// 2. create a client.
"use strict";

const net = require('net');

const client = net.connect({port: 3000, host: '127.0.0.1'});

// 4. create a nickname flag used to mark the username whether is asignuped.
let nickname;

client.on('connect', () => {

	// 5. when client firstly connecting with the server, it shows to input the nickname
	process.stdout.write('please enter the nickname: ');

	// 6. the client will enter the name, 
	// notice important: the data used to send to the server and in binary format.
	process.stdin.on('data', (data) => { // notice: the data is in binary format

		data = data.toString().trim(); // notice: will trnasfert to string format and trim the space.

		// 7. when firstly input the nickname, nickname is null, so we can do that
		if (!nickname) {

			// 8. here we define a data protocol
			let send = {
				protocol: 'signup',
				nickname: data // here the data already be in string format
			};

			return client.write(JSON.stringify(send)); // 9. the new client name will send to server's users object.
			/*
				notice import: the send is the 'data' the server will receive, 
				and in object format, we need to firstly transfer to string format, 
				the JSON format is the classical format, and can be do in data protocol format,
				but remember to transfer to string firstly, and the string will be transfer to binary
				in socket of client.
			*/   
		}

		// 10. getting here means that the client can send the message to others through server.

		/*

			20. until now, we already deal with the signup protocol, 
		        the code run under following path:
		        firstly, enter a name, and then define whether it is successful,
		        if ok, you can input the anyting you want to send, otehrwise, it will tell you send a new name. 
		*/ 

		// 21. we also need to define whether the client send the message to one person or all persons
		// here we define a format:  if in 'username: blabla', it is in 'P2P' saying to username only.
		// if in 'blabla', it means say everyone
		// so we can define the ':' exist.

		let arr = data.split(':');

		let send = {};

// 22. firstly, we deal with the 'braodcast' message, which means client can send the message to all persons.
		if (arr.length == 1) {

			send = {

				protocol: 'broadcast',
				from: nickname,
				message: data
			};
		} else if (arr.length == 2) {

			// 26. if includes the ':', it means that the p2p, and in the server it will deal with p2p function

			send = {
				protocol: 'p2p',
				from: nickname,
				to: arr[0],
				message: arr[1]
			};
		}

		client.write(JSON.stringify(send));

	});

});

client.on('data', (data) => {

	// 18. when the client receive the data ('send' from server) it will deal with it.

	try {

		// just remember the protocol format
		// { protocol:'signup',code:'1001',message:'nickname already exists' }
       // { protocol:'signup',code:'1000',message:'ok' }

       let signal = JSON.parse(data);
       let protocol = signal.protocol;


       // 19. through the 'protocol' to define the different branches.
       if (protocol === 'signup') {

       		switch (signal.code) {
       			case '1000':

       			// notice important: when signup successful, add the signal.nickname to nickname,
       			// thus, we can continue the step 10.!!!!
       				nickname = signal.nickname;
       				console.log('signup successful');
       				break;
   				case '1001':
   					console.log('username exists already');
   					break;
       		}


       } else if (protocol === 'broadcast') {

       	/*

			let send = {
			protocol: 'broadcast',
			nickname: signal.from,
			message: message
		};
       	*/


       	// 25. the client will receive the data and show in client terminal.
       	console.log(`${signal.nickname} say: ${signal.message}`);


       } else if (protocol === 'p2p') {


       	// 28. will deal with the data from server when in p2p protocol

       	let code = signal.code;

			if (!code) {
				console.log(`${signal.from} say to me: ${signal.message}`);
			} else {

				console.log('username does not exist');
			}
       }


	} catch(e) {
		console.log('the username is abnormal');
	}

});

client.on('end', () => {

});























