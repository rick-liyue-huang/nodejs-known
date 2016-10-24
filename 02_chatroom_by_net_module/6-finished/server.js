

// we should define some data protocol both in server and client, and used to communicate between server and client

// 1. create a server 
"use strict";

const net = require('net');

const server = net.createServer();

// 3. create a clients object used to store the (nickname) usernames who connect the server.
let users = {};

server.on('connection', (socket) => {

	// 11. here the socket of server will connect the client and receive the 'data' from client.
	socket.on('data', (data) => {

		// notice: must trinsfert to string format
		data = data.toString().trim();

		try { // a normal code in node to deal with the error

				// 12. here we must know that the data transfered is in binary format, and respondingly

				// the string format is in 
				// '{ protocol:'signup',code:'1001',message:'nickname already exists' }'
		      	// '{ protocol:'signup',code:'1000',message:'ok' }'

		      	// so we define some 'key' to match the JSON format
		      let signal = JSON.parse(data); // will trnasfer to JSON object
		      let protocol = signal.protocol;



		      // 13, in order to deal with the different situation, we should capsulate the function to 
		      // define the message from clients is nickname or message by the 'protocol' name .
		      switch(protocol) {
		      	case 'signup':
		      		signup(signal);
		      		break;
	      		case 'broadcast':
	      			broadcast(signal);
	      			break;
      			case 'p2p':
      				p2p(signal);
      				break;
		      }

		} catch (e) {
			socket.write('do not do that');
		}

	});

	// 14. complete the signup function
	function signup(signal) {

		/* remember that, the signal from client is following,

			let send = {
				protocol: 'signup',
				nickname: data 
			};
		*/


		// 17. but before that, we should define whether the nickname already exist.
		if (users[signal.nickname]) {
			// do the same thing to define the JSON format
			let send = {
				protocol: 'signup',
				code: '1001',
				message: 'nickname already existed'
			};
			return socket.write(JSON.stringify(send)); // let the client know that the nickname is no good.
		}


		users[signal.nickname] = socket; // notice important: the socket ==== client

		// 15. also define a data protocol format
		let send = {
			protocol: 'signup',
			code: '1000',
			nickname: signal.nickname,
			message: 'signup successful'
		};

		// 16. and send the 'send' in string to client.
		return socket.write(JSON.stringify(send)); 
	}


// 23. based on step 22. in server termianl will deal with the broadcast fucntion
	function broadcast(signal) {


/* remember the data from client
	send = {

				protocol: 'broadcast',
				from: nickname,
				message: data
			};
*/
		let send = {
			protocol: 'broadcast',
			nickname: signal.from,
			message: signal.message
		};

		let sendStr = JSON.stringify(send);

		for (let nickname in users) { 

			// 24. the server will send the data to client
			users[nickname].write(sendStr);
			// users[signal.nickname] = socket; so === socket.write();
		}
	}

	// 27. capsulate the p2p function
	/*

		send = {
				protocol: 'p2p',
				from: nickname,
				to: arr[0],
				message: arr[1]
			};
	*/

	function p2p (signal) {

		let someBody = signal.to;

		let user = users[someBody];
		if (!users[someBody]) {

			let send = {
				protocol: 'p2p',
				code: 2002,
				message: 'nickname not exist'
			}
			return socket.write(JSON.stringify(send));
		}

		let send = {
			protocol: 'p2p',
			from: signal.from,
			message: signal.message
		};

		user.write(JSON.stringify(send));
	}

});


let port = 3000;
server.listen(port, () => {
	console.log(`the server is running at port ${port}`);
});



































