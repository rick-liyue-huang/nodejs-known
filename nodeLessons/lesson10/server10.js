	
	const express = require(`express`);
	const cookieParser = require(`cookie-parser`);
	const cookieSession = require(`cookie-session`);

	let server = express();

	server.listen(3000);

	// if we use cookie-session, we need keys used to encrypt the session, here set the keys 
	// keys is an array of signed keys
	let arr = [];
	for (let i = 0; i < 100000; i++) {
		arr.push(`sig_${Math.random()}`);
	}

	server.use(cookieParser(`ashkjsdhfjshdhd`));

	// in order to use session, we need cookie-session module, and use after cookie-parser module
	server.use(cookieSession({
		// if we use cookie-session, we need keys used to encrypt the session, and other options
		name: `sess`,
		keys: arr,
		maxAge: 24*3600*100
	}));


	server.use(`/`, (req, res) => {

		// 1. we try cookie
		// res.cookie(`user`, `rick`, {maxAge: 30*24*3600*1000}); // this is the normal cookie, here server send the cookie object
		// to browser, and cookie stored in browsers, cookie also can set the expire time and others options

		// 2. in order not to change the cookie, we also can set signement. and browser set the signed info
		req.secret = `ashkjsdhfjshdhd`;
		

		res.cookie(`user`, `leo`, {maxAge: 30*24*3600*1000, signed: true});

		// because cookie[`user`] is set from server (res), we can clear in res
		// res.clearCookie(`user`);

		// we can log the unsigned info and signed info
		// console.log('the signed cookie: ', req.signedCookies); // the signed cookie:  { user: 'leo' }
		// after run res.clearCookie(`user`); it will log {}
		// console.log('the unsigned cookie: ', req.cookies);
		/*
			the unsigned cookie:  { 'Webstorm-e1ed5aff': 'bba0454b-8d6e-449b-8d30-20a11d5ed5e8',
  			'Webstorm-e1ed5ebe': '1cbc0065-8425-4c88-a97a-1b06f595a2f6' }
		*/

		// 3. session depends on the cookie, it is a key designated by server, and set as cookie's property
		if (req.session[`count`] === null) {
			req.session[`count`] = 1;
		} else {
			req.session[`count`]++;
		}

		delete res.session;

		console.log(req.session); // Session { count: 1 }


		res.send(`ok`);
	});


	// here we should notice that: the cookie can used in all child-path, for example, we set cookiet
	// in '/', and we can use cookie in '/aaa', '/aaa/a.html'
	




















