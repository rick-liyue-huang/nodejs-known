
	"use strict";

	const musicList = [
		{
			id: `1`,
			title: `富士山下`,
			time: `04:19`,
			singer: `Ethon`
		},
		{
			id: `2`,
			title: `大哥`,
			time: `03:57`,
			singer: `卫兰`
		},
		{
			id: `3`,
			title: `血染的风采`,
			time: `03:35`,
			singer: `黄耀明`
		},
		{
			id: `4`,
			title: `相思`,
			time: `03:02`,
			singer: `毛阿敏`
		},
		{
			id: `5`,
			title: `梦里水乡`,
			time: `04:53`,
			singer: `江珊`
		},
		{
			id: `6`,
			title: `石头记`,
			time: `04:38`,
			singer: `达明一派`
		},
	];


	const http = require(`http`);
	const fs = require(`fs`);
	const path = require(`path`);
	const config = require(`./config.js`);
	const mime = require(`./mime.json`);


	// create http server
	let server = http.createServer();

//  listen request event
	server.on(`request`, (req, res) => {

		// res.end(`hello world`);

		// get the req path
		let url = req.url;

	 /* static source

	 /node_modules/jquery/dist/jquery.js
	 /node_modules/bootstrap/dist/js/bootstrap.js
	 /node_modules/art-template/dist/template.js
	 /node_modules/bootstrap/dist/css/bootstrap.css

		*/ 

		if (url === `/`) {
			fs.readFile(path.join(__dirname, `index.html`), (err, data) => {
				if (err) {
					return res.end(err.message);
				}

				res.writeHead(200, {"Content-Type": "text/html; charset=uf-8"});
				res.end(data);
			});
		} else if (url.startsWith(`/node_modules/`)) {

			// get the current static source absolute path
			let fullPath = path.join(__dirname, url);
			console.log(fullPath);

			fs.readFile(fullPath, (err, data) => {
				if (err) {
					return res.end(err.message);
				}
				res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] ||
													`text/plain`});
				res.end(data);
			});
		} else if (url === `/music`) {

			//  先构造要相应给客户端的json对象
			let send = {
				musicList: musicList
			};
//  因为无法通过网络传递json对象，所有我们把json对象转化为json格式的字符串
			let sendStr = JSON.stringify(send);

			// 因为网络中传递的都是二进制，因此我们需要转化为二进制
			let sendBuf = new Buffer(sendStr);

			res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

			// 将二进制数据传递给我们的客户端
			res.end(sendBuf); // res.end()内部可以自动将字符串转换为二进制
		}
	});

//  open listen
	server.listen(config.port, config.host, () => {
		console.log(`server is listening port ${config.port}`);
	});



























