	

	// import the modules

	const express = require(`express`);
	const static = require(`express-static`);
	const mysql = require(`mysql`);
	const cookieParser = require(`cookie-parser`);
	const cookieSession = require(`cookie-session`);
	const consolidate = require(`consolidate`);
	const expressRoute = require(`express-route`);
	const bodyParser = require(`body-parser`);
	const multer = require(`multer`);

	// the user's upload files stored here
	const multerObj = multer({dest: './static/upload'});

	// build the server and listen port.
	let server = express();
	server.listen(3000);

// ---------------------------------------------------------------------------

	// 1. get the request data
	// get 
	server.use(bodyParser.urlencoded());
	server.use(multerObj.any());


// ------------------------------------------------------------------

	// 2. cookie, session
	server.use(cookieParser());

	// need a namespace to encap the statements
	(function() {
		let keys = [];
		for (let i = 0; i < 100000; i++) {
			keys.push('key_'+Math.random());
		}
		server.use(cookieSession({
			name: 'sess_id',
			keys: keys,
			maxAge: 20*3600*1000
		}));
	})();
	
// -------------------------------------------------------

	//3. template
	server.engine('html', consolidate.ejs);
	server.set('views', 'template');
	server.set('view engine', 'html');

//------------------------------------------------------
	//4 route ---- by module thought
	
	// web part
	server.use('/', require('./route/web.js')());

	server.use('/admin/', require('./route/admin.js')());


	

// ------------------------------------------------------

	// default : static
	server.use(static('./static'));






























