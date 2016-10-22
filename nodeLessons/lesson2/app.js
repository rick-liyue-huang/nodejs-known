
	// visit http://localhost:3000/?user=rickhuang and get the output of  'rickhuang' sha1 value e3c766d71667567e18f77869c65cd62f6a1b9ab9。

	/*
	Before begin a project, a package.json is necessary, the package.json contains some info of this project,
	and especially includes the dependency info, so we do not need to copy the whole node_modules.
	A package.json with dependency info is enough for project copy.

	in order to realize the upon convenience, firstly, we need exec the npm init to create the package.json,
	and then, exec npm install ### --save, when import the module of ###, which will create a dependencies,
	of course, we also can produce dependencies in dev by exec npm install ### --save-dev
	just remember that dependencies for production phrase, and devDependencies for development phrase.
	so some npm module about test will input the devDependencies.

	*/ 

	//  import the dependency module

	"use strict";

	const express = require('express'); 
	const utility = require('utility');

	// build the express instance
	let app = express();

	app.get('/', (req, res) => {

	/*
		we get the arg 'user' from 'req.query'
		for example, '127.0.0.1:3000/?user=rickhuang' user = rickhuang
	*/ 
		let user = req.query.user;  // the arg 'user' can be changeable 


//  invoke the method utility.md5, we also can use other methods
//  such as sha1 metod, this method used to encode some string
		let md5Value = utility.md5(user);

		let sha1Value = utility.sha1(user);

//  the encoded value will output on the browser
		// res.send(md5Value);
		res.send(sha1Value);
	});

	app.listen(3000, (() => {
		console.log('app is running at port 3000');
	}));


	/*
		visit the url : 'http://localhost:3000/?user=rickhuang'

		here we use the 'get' method, and start from '/', so the arg 'user' can be change to any one.

		if we do not transfer parameters user, req.query.user value is undefined, and utility.sha1 will 
		work on this null value and then throw the error from crypto layer. 

	*/ 

































