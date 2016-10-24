
"use strict";

const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeObj = require('./mime.json');

const server = http.createServer((req, res) => {


// res.statusCode = 200;
  // res.statusMessage = 'success';
  // res.setHeader('Content-Type','text/plain; charset=utf-8');

  // we should tell client the data type
  // by Content-Type 
  // res.writeHead(200,{
  //   'Content-Type': 'text/plain; charset=utf-8'
  // });

  // res.end(`当前客户端请求路径是：${req.url}`);

  
	let url = decodeURI(req.url);

	let filePath = path.join(__dirname, url);

	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.end(err.message);
			return;
		}

		let mime = mimeObj[path.extname(filePath)] || 'text/plain; charset=utf-8';

		mime.startsWith('text/') ?
			mime += '; charset=utf-8' : mime;

		res.writeHead(200, {
			'Content-Type': mime
		});
	});


});

server.listen(3000);



































