
	const express = require(`express`);
	const common = require('../libs/common.js');
	const mysql = require('mysql');

	let db = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: 'newpass',
		database: 'rickblog'
	});

	module.exports = function() {

		let router = express.Router();

		// check the login status , by cookie session
		//  means that under /admin/ path, all sub-path will check the login status
		router.use((req, res, next) => {

			if (!req.session['admin_id'] && req.url != '/login') { // havenot login
				// transfer to login page
				res.redirect('/admin/login');
			} else {
				next();
			}
		});

		// 

		router.get('/login', (req, res) => {
			res.render('admin/login.ejs', {});
		});

		router.post('/login', (req, res) => {

			// console.log(req.body);
			let username = req.body.username;
			let password = common.md5(req.body.password+common.MD5_SUFFIX);

			db.query(`SELECT * FROM admin_table WHERE username='${username}'`, (err, data) => {
				if (err) {
					console.log(err);
					res.status(500).send('database error').end();
				} else {
					if (data.length === 0) {
						res.status(400).send('no this admin').end();
					} else {
						if (data[0].password === password) {
							// successful
							req.session['admin_id'] = data[0].ID;

							res.redirect('/admin/');
						} else {
							res.status(404).send('this password is incorrected').end();
						}
					}
				}
			});

		});

		router.get('/', (req, res) => {
			// res.send('congratulation');
			res.render('admin/index.ejs', {});
		});

		router.get('/banners', (req, res) => {
			res.render('admin/banners.ejs', {});
		});

		return router;
	};


























