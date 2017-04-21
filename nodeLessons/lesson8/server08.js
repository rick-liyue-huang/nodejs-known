
 const express = require(`express`);

 let server = express();

// listen port
 server.listen(3000);

 /*

 server.use(`/a.html`, (req, res) => {

 	res.send({a:1, b:2}); // res.send can transmit the obj or array type
 	// express keep the original function and also add some new functions
 	// res.end();
 });


// deal with request
 server.use(`/abc.html`, (req, res) => {
 	res.send(`abc`);
 	// res.end();
 });

 */

/*
	express has three methods: 
	server.get(``, (req, res) => {});
	server.post(``, (req, res) => {});
	server.use(``, (req, res) => {});
*/

	server.get(`/`, (req, res) => {
		console.log(`has get`);
	});

	server.post(`/`, (req, res) => {
		console.log(`has post`);
	});



























