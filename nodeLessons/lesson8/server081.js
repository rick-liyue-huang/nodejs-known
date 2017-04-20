
	const express = require(`express`);

	// middleware as express --- plugin as jquery
	const expressStatic = require(`express-static`);

	let server = express();

	server.listen(3000);

	// users info
	let users = {
		'rick': `123123`,
		'leo': `1111`,
		'liyue': `2222`
	};

	server.use(expressStatic(`./www`));

	/* interface: 
	/login?user=xxx&pass=xxx
	=> {ok: true, msg: xxx}
	*/


	server.get(`/login`, (req, res) => {
		// console.log(req.query); // { user: 'rick', pass: '12' }

		let user = req.query.user;
		let pass = req.query.pass;

		if (users[user] === null) {
			res.send({ok: false, msg: `user not found `});
		} else {
			if (users[user] !== pass) {
				res.send({ok: false, msg: `user wrong`});
			} else {
				res.send({ok: true, msg: `successul`});
			}
		}
	});


	
















