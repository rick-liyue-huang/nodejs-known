
	`use strict`;

	const http = require(`http`);
	const fs = require(`fs`);
	const querystring = require(`querystring`);
	const urlLib = require(`url`);

	let users = {}; // used to store the users info

	let server = http.createServer((req, res) => {

		// analyze the data

		let str = ``;
		req.on(`data`, (data) => {
			str += data;
		});
		req.on(`end`, () => {

			console.log(str);

			let obj = urlLib.parse(req.url, true);

			let url = obj.pathname;
			const GET = obj.query;
			const POST = querystring.parse(str);

			if (url === `/user`) { // confirm this is interface

				switch (GET.act) {

					case `reg`:
						// 1. check the user whether the user is existed
						if (users[GET.user]) {
							res.end(`{"ok": false, "msg": "the user is exist"}`);
						} else {
							// 2. store the new user in users
							users[GET.user] = GET.pass;
							res.end(`{"ok": true, "msg": "reg successful"}`);
						}
						break;

					case `login`: 
						// 1. check the user is null
						if (users[GET.user] === null) {
							res.end(`{"ok": false, "msg": "the user is not exist"}`);
						} else if (users[GET.user] !== GET.pass) {
							res.end(`{"ok": false, "msg": "some wrong"}`);
						} else {
							res.end(`{"ok": true, "msg": "login done"}`);
						}
						break;

					default: 
						res.end(`{"ok": false, "msg": "unknown act"}`);

				}


			} else { // used to get file

				let file_name = `./www${url}`;
				fs.readFile(file_name, (err, data) => {
					if (err) {
						res.end(`404`);
					} else {
						res.end(data);
					}
				});

			}


			console.log(users);
		});


	});

	server.listen(3000, () => {
		console.log(`the server is listening the port 3000`);
	});






































