	
	//import some built-in module, including `http` `fs` `path` `querystring` `url`
	const http = require(`http`);
	const fs = require(`fs`);
	const path = require(`path`);
	const url = require(`url`);
	const querystring = require(`querystring`);

	// put some configuration or some pre-defined data in the export file, here we import them
	const mime = require(`./mime.json`);
	const config = require(`./config.js`);

	// art-template is a template engine, it can also used in node.js
	const artTemplate = require(`art-template`);

//  it provides some configuration; in order to distinguish it from front-end (.html), we config the engine tag
	artTemplate.config(`openTag`, `<<`);
	artTemplate.config(`closeTag`, `>>`);

	// arttempalte can cache the template string, so we cancel cache.
	artTemplate.config(`cache`, false);


// here we simulate some data, put it in the back-end server
	const musicList = [{
		  id: '1',
		  title: '富士山下',
		  time: '04:19',
		  singer: '陈奕迅',
		  src: '/files/陈奕迅 - 富士山下.mp3'
		}, {
		  id: '2',
		  title: '大哥',
		  time: '03:57',
		  singer: '卫兰',
		  src: './files/卫兰 - 大哥.mp3'
		}, {
		  id: '3',
		  title: '血染的风采',
		  time: '03:35',
		  singer: '黄耀明',
		  src: '/files/黄耀明 - 血染的风采.mp3'
		}, {
		  id: '4',
		  title: '相思',
		  time: '03:02',
		  singer: ' 毛阿敏',
		  src: '/files/毛阿敏 - 相思.mp3'
		}, {
		  id: '5',
		  title: '梦里水乡',
		  time: '04:53',
		  singer: ' 江珊',
		  src: '/files/江珊 - 梦里水乡.mp3'
		}, {
		  id: '6',
		  title: '石头记',
		  time: '04:38',
		  singer: ' 达明一派',
		  src: '/files/达明一派 - 石头记.mp3'
		}];


	let server = http.createServer();

	server.on(`request`, (req, res) => {

		// let 'url.parse(req.url).query' become json object
		let urlObj = url.parse(req.url, true);

		let pathname = decodeURI(urlObj.pathname);
		req.query = urlObj.query;
		let method = req.method;

		// sel-define function 
		res.render = render(res);
		res.json = responseJson(res);
		res.redirect = redirect(res);

		console.log(pathname);
		// /node_modules/bootstrap/dist/css/bootstrap.css
		// /node_modules/jquery/dist/jquery.js
  		// /node_modules/bootstrap/dist/js/bootstrap.js
	    // /node_modules/art-template/dist/template.js


	    // based on the different pathname, we do some different response
		if (method === `GET` && pathname === `/`) {

			res.render(`index`);

			// loading the static files
		} else if (method === `GET` && pathname.startsWith(`/node_modules/`)) {

			let fullPath = path.join(__dirname, pathname);
			fs.readFile(fullPath, (err, data) => {
				if (err) {
					return res.end(err.message);
				}

				// deal with the coding 
				res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] || 
													`text/plain` });
				res.end(data);
			});

		} else if (method === `GET` && pathname === `/music`) {

			// musicList is array type, so we need encap it to json type
			let send = {
				musicList
			};

			// only stransfer the string type in network
			let sendStr = JSON.stringify(send);

			// let sendBuf = Buffer.from(sendStr); // network auto transfer string to buffer

			res.writeHead(200, {"Content-Type": `text/plain; charset=utf-8`}); // used to decode the messy code
			res.end(sendStr);

		} else if (method === `GET` && pathname.startsWith(`/files/`)) {

			let fullPath = path.join(__dirname, pathname);

			//  this a huge file, so we use stream pipe method
			let readStream = fs.createReadStream(fullPath);
			readStream.pipe(res);

		} else if (method === `GET` && pathname === `/add`) {

			res.render(`add`);

		} else if (method === `POST` && pathname === `/add`) {

			let data = ``;


			// in POST method, it will use req.on('data') and req.on('end') to transfer data to backend.
			req.on(`data`, (chunk) => {
				data += chunk;
			});

			req.on(`end`, () => {

				// res.end(data); // id=e&title=e&time=fsds&singer=aas
				let obj = querystring.parse(data);
				console.log(obj);

				let mid = obj.id;

				let music = musicList.find(m => m.id === mid);

				// means that the music id already exist, so return err message.
				if (music) {
					return res.json({
						code: `5001`,
						msg: `the music id exists already`
					});
				}

				// push new music in the array
				musicList.push(obj);
				// console.log(musicList);


				// redirect to the mainpage
				res.redirect(`http://127.0.0.1:3000/`);
			});

		} else if (method === `GET` && pathname === `/edit`) {

				let mid = req.query.mid;

				let music = musicList.find( m => m.id === mid);

				// if the music not found
				if (!music) {
					return res.json({
						code: `5002`,
						msg: `the music not found`
					});
				}
				// console.log(mid);
				res.render(`edit`, {
					music
				});

		} else if (method === `POST` && pathname === `/edit`) {

			let mid = req.query.mid;

			let index = musicList.findIndex(m => m.id === mid);

			
			if (index === -1) {
				return res.json({
					code: `5002`,
					msg: `music not found`
				});
			}

			let data = ``;

			req.on(`data`, (chunk) => {
				data += chunk;
			});

			req.on(`end`, () => {

				data = querystring.parse(data);
				data.id = mid; // add .id property

				musicList[index] = data;
				res.redirect(`http://127.0.0.1:3000/`);
			});

		} else if (method === `GET` && pathname === `/remove`) {

			let mid = req.query.mid;

			let index = musicList.findIndex(m => m.id === mid);

			if (index === -1) {
				return res.json({
					code: `5002`,
					msg: `the music not found`
				});
			}

			musicList.splice(index, 1);
			// res.redirect(`http://127.0.0.1:3000/`);// synchronously refresh

			// here we send the code info to front, in order to refresh page ansynchronously;
			res.json({
				code: `6000`,
				msg: `remove successful`
			});
		}

	});

	server.listen(config.port, () => {
		console.log(`this server is listening the port ${config.port} on host ${config.host}`);
	});

/*
	function render(res) {
		return function(filename) {

			fs.readFile(path.join(__dirname, `${filename}.html`), (err, data) => {
				if (err) {
					return res.end(err.message);
				}
				// console.log(path.join(__dirname, `index.html`)); // /Users/rickhuang/Desktop/kk/index.html
				res.writeHead(200, {"Content-Type": `text/html; charset=utf-8`});
				res.end(data);
			});
		};
	}
	*/


	// self-defined func
	function render(res) {
		return function (filename, data) {

			let htmlStr = artTemplate(`${__dirname}/${filename}`, data || {});
			res.writeHead(200, {"Content-Type": `text/html; charset=utf-8`});
			res.end(htmlStr);
		};
	}

	function responseJson(res) {

		return function (jsonObj) {
			let jsonStr = JSON.stringify(jsonObj);
			res.writeHead(200, {"Content-Type": `text/plain; charset=utf-8`});
			res.end(jsonStr);
		};
	}

	function redirect(res) {
		return function(location) {
			res.writeHead(302, {"Location": location});
			res.end();
		};
	}

































