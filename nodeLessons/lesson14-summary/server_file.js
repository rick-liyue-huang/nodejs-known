
	const express = require(`express`);
	const bodyParser = require(`body-parser`); // 不适合上传文件
	const multer = require(`multer`); // 可以传递文件
	const fs = require(`fs`); 
	const pathLib = require(`path`);

	// let objMulter = multer({dest: './www/upload'});

	let server = express();

	server.use(bodyParser({extended: false}));
	server.use(multer({dest: './www/upload'}).any()); // 用来上传对象文件


	server.post(`/`, (req, res) => {
		// console.log(req.body);
		console.log(req.files[0].originalname);

		let newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;

		fs.rename(req.files[0].path, newName, (err) => {
			if (err) {
				res.send(`upload wrong`);
			} else {
				res.send(`upload successful`);
			}
		});

		// 1. 获取原始的文件名字

		// 2. 重命名
	});

	server.listen(3000);