




//  this is the server code, to open a server

"use strict";

const http = require('http');
const fs = require('fs');
const path = require('path');
const config = require('./config.js');

// used to confirm the transfer file type
const mime = require('./mime.json');

const artTemplate = require('art-template');


// config the server end template tag
artTemplate.config('openTag', '<<');
artTemplate.config('closeTag', '>>');
artTemplate.config('cache', false); // cancel cache

// the module used to query string, and has one method of 'parse'
const querystring = require('querystring');
// used to deal with url path, has one method of 'parse' to json object
const url = require('url');

const musicList = [{

	id: '1',
	title: '富士山下',
	time: '04:19',
	singer: '陈奕迅',
	src: '/files/04.mp3'
}, {

	id: '2',
	title: '大哥',
	time: '03:57',
	singer: '卫兰',
	src: '/files/08.mp3'
}, {

	id: '3',
	title: '血染的风采',
	time: '03:35',
	singer: '黄耀明',
	src: '/files/06.mp3'
}, {

	id: '4',
	title: '相思',
	time: '03:01',
	singer: '毛阿敏',
	src: '/files/02.mp3'
}, {

	id: '5',
	title: '梦里水乡',
	time: '04:54',
	singer: '江珊迅',
	src: '/files/01.mp3'
}, {

	id: '6',
	title: '石头记',
	time: '04:38',
	singer: '达明一派',
	src: '/files/05.mp3'
}];



// create the server
const server = http.createServer();


// listen 'request' event, and setting the callback
server.on('request', (req, res) => {

	// in http module first req then res

	// res.end('hello world'); // used to test

// 
	let urlObj = url.parse(req.url, true);

	// in order to be convenient, we will create a request property
	req.query = urlObj.query; 

	// get the request url path
	let pathname = urlObj.pathname;

//  used to differiate 'GET' and 'POST'
	let method = req.method;


// dynamically add a 'render' function to 'response' object
	res.render = render(res);

	res.json = responseJson(res);

	// /node_modules/bootstrap/dist/css/bootstrap.css
	// /node_modules/jquery/dist/jquery.js
	// /node_modules/bootstrap/dist/js/bootstrap.js
	// /node_modules/art-template/dist/template.js

	if (pathname === '/favicon.ico') {
		res.end();

	} else if (method === 'GET' && pathname === '/') {
		// fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {

		// 	if (err) {
		// 		return res.end(err.message);
		// 	}
		// 	res.writeHead(200, {
		// 		'Content-Type': 'text/html; charset=utf-8'
		// 	});
		// 	res.end(data);
		// });

		res.render('index');

	} else if (method === 'GET' && pathname.startsWith('/node_modules/')) {

		// get the static source request absolute path
		let fullPath = path.join(__dirname, pathname);

		fs.readFile(fullPath, (err, data) => {
			if (err) {
				return res.end(err.message);
			}

			res.writeHead(200, {
				'Content-Type': mime[path.extname(fullPath)] || 'text/plain'
			});

			res.end(data);
		});
	} else if (method === 'GET' && pathname === '/music') {


// create the json object
		let send = {
			musicList: musicList
		};

// because the network cannot transfer the json object, we transfer it to json string format
		let sendStr = JSON.stringify(send);

		// the network only transfer the binary, so we need transfer from string to binary
		let sendBuf = new Buffer(sendStr);

		res.writeHead(200, {
			'Content-Type': 'text/plain; charset=utf-8'
		});

		// send the binary to client, we wil goto client index.html
		res.end(sendBuf);

	} else if (method === 'GET' && pathname.startsWith('/files/')) {

		// for the big mp3 file, we need the stream.
		// let rs = fs.createReadStream(path.join(__dirname, 'files/02.mp3'));

		// // by pipe() method
		// rs.pipe(res); // res is writable stream.

		let fullPath = path.join(__dirname, pathname);
		let rs = fs.createReadStream(fullPath);
		rs.pipe(res);

	} else if (method === 'GET' && pathname === '/add') {
		// fs.readFile(path.join(__dirname, 'add.html'), (err, data) => {
		// 	if (err) {
		// 		return res.end(err.message);
		// 	}
		// 	res.writeHead(200, {
		// 		'Content-Type': 'text/html; charset=utf-8'
		// 	});
		// 	res.end(data);
		// });
		res.render('add');

	} else if (method === 'POST' && pathname === '/add') {

		let data = '';

		// receive POST type data
		req.on('data', (chunk) => {

			data += chunk;
		});

		req.on('end', () => {
			// receive finish
			// res.end(data);

			let obj = querystring.parse(data);
			// res.json(obj);

			// avoid the repeatly add the same id
			let mid = obj.id;

			let music = musicList.find((m) => {
				return m.id === mid;
			});

//  if music exists, tell the client
			if (music) {
				return res.json({
					code: '5001',
					message: 'song already existed'
				});
			}

			// here can add song
			musicList.push(obj);

			// res.json({
			// 	code: '5000',
			// 	message: 'successfully add song'
			// });


// capsulate needed
			res.writeHead(302, {
				'Location': 'http://127.0.0.1:3000/'
			});
			res.end();
		});

	} else if (method === 'GET' && pathname === '/edit') {

		// res.end('msg');

		// console.log(urlObj.query);
		// res.end(req.query.mid);

		// from the stringquery, to get the edited song id
		let mid = req.query.mid;

		// based on the id to get the responding song
		let music = musicList.find( m => m.id === mid);

		// res.json(music);

		if (!music) {
			res.json({
				code: '5003',
				message: 'song not found'
			});
		}

		res.render('edit', {
			music: music    // music only for the same name in es6
		}); 


	} else if (method === 'POST' && pathname === '/edit') {

		let mid = req.query.mid;

		// based on the id to check whether it exist
		let index = musicList.findIndex(m => m.id === mid);

		if (index === -1) {
			return res.json({
				code: '5002',
				message: 'song not found'
			});
		}

		// res.end(mid);

		// receive the post method
		// used to store the received data
		let data = '';

		// listen the 'request' 'data' event
		req.on('data', (chunk) => {

			// buffer object will auto toString to a string
			data += chunk;
		});

		// only completely receive it, 
		req.on('end', () => {

			// res.json({
			// 	data: data
			// });

			data = querystring.parse(data);

			// res.json({
			// 	data: data
			// });

			// because front end disable the id, 
			data.id = mid;

			musicList[index] = data;

			res.writeHead(302, {
				'Location': 'http://127.0.0.1:3000/'
			});

			// must write end()
			res.end();
		});

	} else if (method === 'GET' && pathname === '/remove') {

		let mid = req.query.mid;

		// based on the song id to find the song index
		let index = musicList.findIndex(m => m.id === mid);

		if (index === -1) {
			return res.json({
				code: '6002',
				message: 'song not found'
			});
		}

		// do delete
		musicList.splice(index, 1);

		// res.end('remove successfully');
		res.json({
			code: '6000',
			message: 'remove successfully'
		});
	}

});

// open listen
server.listen(config.port, config.host, () => {
	console.log(`server is listening at port ${config.port}`);
});



// capsulate a func to readFile by path
// function render(res) {

// 	return function (fileName) {
// 		fs.readFile(`${path.join(__dirname, fileName)}.html`, (err, data) => {
// 			if (err) {
// 				return res.end(err.message);
// 			}
// 			res.writeHead(200, {
// 				'Content-Type': 'text/html; charset=utf-8'
// 			});
// 			res.end(data);
// 		});
// 	}

	
// }

function render (res) {

	return function(fileName, data) {

		// some page do not need data injection, avoiding the undefined.

		let htmlStr = artTemplate(`${__dirname}/${fileName}`, data || {});
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=utf-8'
		});
		res.end(htmlStr);
	};
}


function responseJson(res) {

	return function (jsonObj) {

		let jsonStr = JSON.stringify(jsonObj);
		res.writeHead(200, {
			'Content-Type': 'text/plain; charset=utf-8'
		});
		res.end(jsonStr);
	};
}



//  'jquery validate' used to query the form 
// here we do not need it now































