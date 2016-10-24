

//  this is the server code, to open a server

"use strict";

const http = require('http');
const config = require('./config');
const fs = require('fs');
const path = require('path');

const musicList = [{

	id: '1',
	title: '富士山下'，
	time: '04:19',
	singer: '陈奕迅'
}，{

	id: '1',
	title: '富士山下'，
	time: '04:19',
	singer: '陈奕迅'
}， {

	id: '1',
	title: '富士山下'，
	time: '04:19',
	singer: '陈奕迅'
}，{

	id: '1',
	title: '富士山下'，
	time: '04:19',
	singer: '陈奕迅'
}，{

	id: '1',
	title: '富士山下'，
	time: '04:19',
	singer: '陈奕迅'
}，{

	id: '1',
	title: '富士山下'，
	time: '04:19',
	singer: '陈奕迅'
}]；

const server = http.createServer();

server.on('request', (req, res) => {

	let url = req.url;

	if (url === '/') {
		fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
			if (err) {
				return res.end(err.message);
			}

			res.writeHead(200, {
				'Content-Type': 'text/html; charset=utf-8'
			});
			res.end(data);
		});
	} else if (url.startsWith('/node_modules')) {

		let fullPath = path.join(__dirname, url);

		fs.readFile(fullPath, (err, data) => {
			if (err) {
				return res.end(err.message);
			}
			res.end(data);
		});
	} else if (url === '/favicon.ico') {
		res.end();
	} else if (url === '/music') {

		res.writeHead(200, {
			'Content-Type': 'text/plain; charset=utf-8'
		});
		res.end(JSON.stringify({
			musicList:musicList
		}));
	}
});

server.listen(config.port, config.host, () => {
	console.log(`server is listening at port ${config.port}`);
});


































