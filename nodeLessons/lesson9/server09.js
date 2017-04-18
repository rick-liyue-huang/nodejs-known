
 const express = require(`express`);
 const cookieParser = require(`cookie-parser`);
 const cookieSession = require(`cookie-session`);

 let server = express();

 
 server.use(cookieParser(`dkdhkjhkls`));
 server.use(cookieSession({
 	keys: ['aaa', 'bbb', 'ccc']
 }));


 server.use(`/`, (req, res) => {
 	
 	// req.secret = 'dkdhkjhkls';
 	// res.cookie(`user`, `rick`, {signed: true});
 	// // res.send(`ok`);
 	// console.log(req.signedCookies);
 	// console.log(req.cookies);

 	// res.clearCookie('user');

 	console.log(req.session);

 	res.send(`ok`); 
 });

 server.listen(3000); 