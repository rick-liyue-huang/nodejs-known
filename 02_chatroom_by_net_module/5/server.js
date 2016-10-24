

"use strict";

const net = require('net');

const server = net.createServer();

let users = {};

server.on('connection', (socket) => {

	socket.on('data', (data) => {

		//3.  at this time, server will listen the data
		data = data.toString().trim();

		// 4. define whetehr the username is exist.

		// { protocol:'signup',code:'1001',message:'nickname already exists' }
      // { protocol:'signup',code:'1002',message:'nickname  invalid' }
      // { protocol:'signup',code:'1000',message:'ok' }


try {

	//12. when asignup info data send to server, we will get the data of 'send' 
// in object format
      let signal = JSON.parse(data);


// 13. get the protocol of received data
      let protocol = signal.protocol;


// 14. define the protocol type
      switch (protocol) {
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

} catch(e) {

	socket.write('do not do that.');
} 




});


// 15. capsulate a function to apply the signup

	function signup(signal) {

		// 5. it means user already exist, so it will send a protocol to the client
		if (users[signal.nickname]) {

			let send = {
				protocol: 'signup',
				code: '1001',
				message: 'nickname already exists'
			};
		    return socket.write(JSON.stringify(send));
		}

// 6. if code runs here, it means that the user is not exist, so we can put the 
// user in users object

		users[signal.nickname] = socket

		// 7. also send the info to client
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
			protocol : 'broadcast',
			nickname: signal.from,
			message: signal.message
		};

		let sendStr = JSON.stringify(send);

		for(let nickname in users) {
			users[nickname].write(sendStr);
		}
	}

	function p2p(signal) {

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

server.listen(port, '127.0.0.1', () => {
	console.log(`server is listening at port ${port}`);
});




















