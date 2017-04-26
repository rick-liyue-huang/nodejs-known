
	const express = require(`express`);
	const static = require(`express-static`);
	const cookieParser = require(`cookie-parser`);
	const cookieSession = require(`cookie-session`);
	const bodyParser = require(`body-parser`);
	const multer = require(`multer`);
	const consolidate = require(`consolidate`);
	const mysql = require(`mysql`);
	const common = require('./libs/common.js');

/*
	let db = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'newpass',
			database: 'blog'
		});

		*/
	const db = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: 'newpass',
		database: 'blog'
	});

	let server = express();
	server.listen(3000);

	let arr = [];

	for (let i = 0; i < 100000; i++) {
		arr.push('key_'+Math.random());
	}


	server.use(cookieParser(`kjdhkjsdhhskdjhlkfkdh`));
	server.use(cookieSession({
		name: 'rick_sess_id',
		keys: arr,
		maxAge: 20*3600*1000
	}));

	// post data
	server.use(bodyParser.urlencoded({extended: false}));

	server.use(multer({dest: './www/upload'}).any());

	// config the template engine
	// what kind of type output
	server.set('view engine', 'html');

	// where is the template put
	server.set('views', './template');

	// which template engine will use
	server.engine('html', consolidate.ejs); 


	// receive the user request

	server.get('/', (req, res, next) => {

		// 查询 banner 
		db.query("SELECT * FROM `banner_table`", (err, data) => {
			if (err) {
				res.status(500).send('database error').end();
				// console.log(err); 
			} else {
				
				// console.log(data);

				res.banners = data;
				next();

			}
		});

	});
	server.get('/', (req, res, next) => {

		// query the news table
		db.query("SELECT `ID`, `title`, `summary` FROM `article_table`", (err, data) => {
			if (err) {
				res.status(5000).send(`database error`).end();
			} else {
				res.articles = data;

				next();
			}
		});

	});

	server.get('/', (req, res) => {
		res.render('index.ejs', {banners: res.banners, articles: res.articles});

		console.log(res.banners);
		console.log(res.articles);
	});


	server.get('/article', (req, res) => {

		if (req.query.id) {

			if (req.query.act === 'like') {

				// add like 


				db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${req.query.id}`, (err, data) => {
				if (err) {
					res.status(500).send(`database wrong`).end();
				} else {

					// show article
					db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, (err, data) => {
						if (err) {
							res.status(500).send(`database wrong`).end();
						} else {

							if (data.length == 0) {
								res.status(404).send(`article is not found`).end();
							} else {

								let article_data = data[0];

								// deal with the post_time
								article_data.sDate = common.time2date(article_data.post_time);

								// deal with teh post article
								article_data.content = article_data.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');

								// console.log(data);

								res.render('conText.ejs', {
									article_data: data[0]
								});
							}
						}
					});
				}

				});


				
			} else {

				// just only show article page

				// show article
				db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, (err, data) => {
					if (err) {
						res.status(500).send(`database wrong`).end();
					} else {

						if (data.length == 0) {
							res.status(404).send(`article is not found`).end();
						} else {

							let article_data = data[0];

							// deal with the post_time
							article_data.sDate = common.time2date(article_data.post_time);

							// deal with teh post article
							article_data.content = article_data.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');

							// console.log(data);

							res.render('conText.ejs', {
								article_data: data[0]
							});
						}
					}
				});
			}
				
		} else {
			res.status( 404).send(`the requested article is not found`).end();
		}

		 
	});

	// import static data
	server.use(static('./www'));
























