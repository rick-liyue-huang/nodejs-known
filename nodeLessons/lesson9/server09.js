
 
 	const express = require(`express`);
 	// const expressStatic = require(`express-static`);
 	const bodyParser = require(`body-parser`);

 	const querystring = require(`querystring`);

 	// import self defined module 
 	const myBodyParser = require(`./libs/my-body-parser.js`);



 	let server = express();
 	server.listen(3000);

/*   
		1. how to deal with form 'get' and 'post' method

// body-parser middleware 
 	server.use(bodyParser.urlencoded({
 		// extended： true,   // 扩展模式
 		limit: 2*1024*1024  // the max post data size
 	})); // used to post method in form , so we can use req.body

 	server.use(`/`, (req, res) => {
 		// console.log(req.query); // if form method is `get`
 		console.log(req.body);  // if form method is `post`
 	});

 	// req.query --- GET
 	// req.body --- POST, body is imported from body-parse module


*/


	/*

		
 	// 2. 链式操作  chaining programming



 	// must deal with the same req url, 
 	server.use(`/`, (req, res, next) => {
 		console.log(`a`);  

 		next();
 	});

 	server.use(`/`, (req, res) => {
 		console.log(`b`);
 	});

 	// will log a b

	*/

	/*

	// test the chain programming

	server.use((req, res, next) => {
		req.a = 68;

		next();
	});

	server.use(`/`, (req, res) => {
		console.log(req.a); // 2 , because the chain programming next(); method
	});

 */

 	// use the self-defined module
 	server.use(myBodyParser.func());

 	server.use(`/`, (req, res) => {
 		console.log(req.body);
 	});





































