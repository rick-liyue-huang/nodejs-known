 
 // write the own middleware

	const express = require(`express`);
	const querystring = require(`querystring`);
	const bodyParser = require(`body-parser`);
	const bodyParser1 = require(`./libs/my-body-parser.js`);

	let server = express();
	server.listen(3000);

/*
	server.use((req, res, next) => {
		
		let str = '';
		req.on(`data`, (data) => {
			str += data;
		});
		req.on(`end`, () => {
			req.body = querystring.parse(str);
			next();
		});
	});

	*/

	// server.use(bodayParser.urlencoded({}));
	server.use(bodyParser1());

	server.use(`/`, (req, res) => {
		console.log(req.body);
	});