
	"use strict";

	const musicList = [
		{
			id: `1`,
			title: `富士山下`,
			time: `04:19`,
			singer: `Ethon`,
			src: `./files/04.mp3`
		},
		{
			id: `2`,
			title: `大哥`,
			time: `03:57`,
			singer: `卫兰`,
			src: `./files/08.mp3`
		},
		{
			id: `3`,
			title: `血染的风采`,
			time: `03:35`,
			singer: `黄耀明`,
			src: `./files/06.mp3`
		},
		{
			id: `4`,
			title: `相思`,
			time: `03:01`,
			singer: `毛阿敏`,
			src: `./files/02.mp3`
		},
		{
			id: `5`,
			title: `梦里水乡`,
			time: `04:54`,
			singer: `江珊`,
			src: `./files/01.mp3`
		},
		{
			id: `6`,
			title: `石头记`,
			time: `04:39`,
			singer: `达明一派`,
			src: `./files/03.mp3`
		},
	];


	const http = require(`http`);
	const fs = require(`fs`);
	const path = require(`path`);
	const querystring = require(`querystring`); 
	const url = require(`url`);
	const config = require(`./config.js`);
	const mime = require(`./mime.json`);
	const artTemplate = require(`art-template`);


	// create http server
	let server = http.createServer();

//  listen request event
	server.on(`request`, (req, res) => {

		res.render = render(res);

		res.json = responseJson(res);

		res.redirect = redirect(res);

		// res.end(`hello world`);

		// get the req path
		let urlObj = url.parse(req.url, true);

		// 为了后面的代码方便操作，我们约定好，把所有的查询字符串转换为 对象之间
		// 挂载到 request对象上的query属性上
		req.query = urlObj.query;

		let pathname = urlObj.pathname;
		let method = req.method;

	 /* static source

	 /node_modules/jquery/dist/jquery.js
	 /node_modules/bootstrap/dist/js/bootstrap.js
	 /node_modules/art-template/dist/template.js
	 /node_modules/bootstrap/dist/css/bootstrap.css

		*/ 

		if (method === `GET` && pathname === `/`) {
			/*
			fs.readFile(path.join(__dirname, `index.html`), (err, data) => {
				if (err) {
					return res.end(err.message);
				}

				res.writeHead(200, {"Content-Type": "text/html; charset=uf-8"});
				res.end(data);
			});
			*/

			res.render(`index`);

		} else if (method === `GET` && pathname.startsWith(`/node_modules/`)) {

			// get the current static source absolute path
			let fullPath = path.join(__dirname, pathname);
			console.log(fullPath);

			fs.readFile(fullPath, (err, data) => {
				if (err) {
					return res.end(err.message);
				}
				res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] ||
													`text/plain`});
				res.end(data);
			});


		} else if (method === `GET` && pathname === `/music`) {

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


		} else if (method === `GET` && pathname.startsWith(`/files/`)) {


			// 对于下面的写法来说，mp3文件很大，这种做法是一次性的读取出来，然后相应到客户端
			// 因此我们用 流的方式，来提高性能。
			// fs.readFile(path.join(__dirname, `files/01.mp3`), (err, data) => {
			// 	if (err) {
			// 		return res.end(err,message);
			// 	}
			// 	res.end(data);
			// });

			let fullPath = path.join(__dirname, pathname);

			// 手动的方式创建一个读取流
			let readStream = fs.createReadStream(fullPath);
			// // 使用node.js原生的方法pipe
			// 我们通过调用读取流的pipe
			readStream.pipe(res);

		} else if (method === `GET` && pathname === `/add`) {

           /*
			fs.readFile(path.join(__dirname, `add.html`), (err, data) => {
				if(err) {
					return res.end(err.message);
				}
				res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
				res.end(data);
			});
			*/
			res.render(`add`);

		} else if (method === `POST` && pathname === `/add`) {

			let data = ``;
			// 接受post方式提交的数据
			req.on(`data`, (chunk) => {
				data += chunk;
			});
			req.on(`end`, () => {
				// res.end(data);

				let obj = querystring.parse(data);
				// res.json(obj);

				// 判断该编号是唯一的
				let mid = obj.id;

				// es6 method find will return the object match the condition
				let music = musicList.find((m) => {
					return m.id === mid;
				});
				// 如果music已经存在，告诉用户该歌曲存在
				if (music) {
					return res.json({
						code: `5001`,
						msg: `music id exist already`
					});
				} 

				// 代码到这里表示可以添加歌曲
				musicList.push(obj);
				

				// 重新定向网页地址
				res.redirect(`http://127.0.0.1:3000/`);

				res.json({
					code: `5000`,
					msg: `successfully add music`
				});
			});

		} else if (method === `GET` && pathname === `/edit`) {

			// 从查询字符串中获取用户要编辑的歌曲信息 id
		    let mid = req.query.mid;

		    // 根据歌曲id，找到数据中的该项
		    let music = musicList.find(m => m.id === mid);

		    if (!music) {
		      return res.json({
		        code:'5003',
		        msg:'music not found'
		      });
		    }

		    // 在 es6 中，可以
		    res.render('edit',{
		      music: music
		    });

		}
	});


//  当调用了render方法之后，render方法就返回一个新的函数，这是高阶函数-- 函数内部返回新的函数
/*
	function render(res) {

		return function(filename) {

			fs.readFile(path.join(__dirname, `${filename}.html`), (err, data) => {
				if (err) {
					return res.end(err.message);
				}
				res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
				res.end(data);
			});
		};
		
	}
	*/

	function render(res) {
	  return function(fileName, data) {
	    // 对于有的页面不需要注入数据，所以我们写了一个短路的 data || {}
	    // 目的是为了出现 undefined
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
			res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
			res.end(jsonStr);
		};
	}

	function redirect(res) {
		return function(path) {
			res.writeHead(302, {
				"Location": path
			});
			res.end();
		};
	}

//  open listen
	server.listen(config.port, config.host, () => {
		console.log(`server is listening port ${config.port}`);
	});



























