
	const express = require(`express`);
	const static = require(`express-static`);
	const cookieParser = require(`cookie-parser`);
	const bodyParser = require(`body-parser`);
	const cookieSession = require(`cookie-session`);
	const multer = require(`multer`);
	// const ejs = require(`ejs`);
	// const jade = require(`jade`);
	const consolidate = require(`consolidate`); // 整合模板引擎

	let server = express();
	server.listen(3000);

	// 1.解析cookie
	server.use(cookieParser(`hashsjkdhshlksdhdsklj`));


	// 2.使用 session
	let arr = [];
	for (let i = 0; i < 100000; i++) {
		arr.push('keys_'+Math.random());
	}
	server.use(cookieSession({
		name: 'sess_id',
		keys: arr,
		maxAge: 20*3600*1000
	}));

	// 3.post数据
	server.use(bodyParser.urlencoded({extended: false}));
	server.use(multer({dest: './www/upload'}).any())

	/* // user request
	server.use('/', (req, res, next) => {
		console.log(`req.query: ${req.query}, 
					 req.body: ${req.body},
					 req.cookies: ${req.cookies},
					 req.session: ${req.session},
					 req.files: ${req.files}`);
	});

	*/

	// 4. 配置模板引擎

	// 输出什么东西
	server.set('view engine', 'html') // 以何种方式为用户呈现出来

	// 模板文件放到哪里
	server.set('views', './views');

	// 用哪种模板引擎
	server.engine('html', consolidate.ejs); // 为了将html呈现出来，需要使用哪种引擎

	// 接受用户请求
	server.get('/index', (req, res) => {

		res.render('1.ejs', {name: 'rick'}); // 和 res.send类似
	});  

	// 4.static 数据
	server.use(static('./www'));


























