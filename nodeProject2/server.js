
	const express = require(`express`);
	const static = require(`express-static`);
	const cookieParser = require(`cookie-parser`);
	const bodyParser = require(`body-parser`);
	const cookieSession = require(`cookie-session`);
	const multer = require(`multer`);
	const consolidate = require(`consolidate`);
	const mysql = require(`mysql`);

	let server = express();
	server.listen(3000);

	server.use(cookieParser(`assklhsdidhsasfdfs`));

	let arr = [];
	for (let i = 0; i < 100000; i++) {
		arr.push('key_' + Math.random());
	}

	server.use(cookieSession({
		name: 'sess_id',
		keys: arr,
		maxAge: 20*3600*1000
	}));


	server.use(bodyParser.urlencoded({extended: false}));
	server.use(multer({dest: './www/upload'}).any());


	server.set('view engine', 'html');
	server.set('views', './template');
	server.engine('html', consolidate.ejs);

	// 接收用户请求
	server.get('/', (req, res) => {
		res.render('index.ejs', {}) 
	});


	server.use(static('./www'));























