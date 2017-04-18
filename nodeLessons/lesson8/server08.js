
 const express = require(`express`);
 const expressStatic = require(`express-static`);
 const bodayParser = require(`body-parser`);

 let server = express();

 server.listen(3000);

 server.use(bodayParser.urlencoded({
 	extended: false, // 扩展模式 分为true or false
 	limit:  2 * 1024 * 1024  // 限制，最多接收多大的post数据， 默认为 100k
 }));


 // get post 
 server.use(`/`, (req, res, next) => {
 	// console.log(req.body);
 	console.log(`a`);
 	next();
 });

 // req.query : get, 相对简单，无需中间件
 // req.body:  post , 需要中间件， body-parser， 就是用里面的req.body

 server.use(`/`, (req, res, next) => {
 	console.log(`b`);
 })































