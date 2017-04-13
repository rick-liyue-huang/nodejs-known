

const http = require(`http`);

let server = http.createServer((req, res) => {

	// req means the incoming message
	// res means the outgoing message
	console.log(`some one is coming...`);
	console.log(req.url);

//  used to path the different url.
	switch (req.url) {
		case `/1.html`:
			res.write(`111\n`);
			break;
		case `/index.html`:
			res.write(`index\n`);
			break;
		default:
			res.write(`error\n`);
			break;
	}

	res.write(`the client is connected`);
	res.end();
});

// listen: just wait. port: 
server.listen(6688, () => {
	console.log(`the server is listening 6688`);
});





































