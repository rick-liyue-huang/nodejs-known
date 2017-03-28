


// http module is based on browser and with the defualt protocol

"use strict";

const http = require(`http`);
//create the server by http module
const server = http.createServer();
let port = 3000;

/*

	will listen the 'request' event,
	as long as the client connecting with the server, it will trigger the request event.
	if no responding, the server will keep open, 
	when server get request message, it will transfer the request message to request obj
	request is readable stream.
	and also capsulate the socket used to communicate with client to response argument

*/


	server.on(`request`, (req, res) => {
		// req will be as the request info, and res will be the response info
	//	只有有客户链接进来，就会触发服务器的request请求事件
	//	如果不在该请求处理中做具体的额相应，那么客户端就会一直保持挂起的状态
	//	服务器在拿到客户端的请求报文之后，会将客户端的请求报文解析为一个request ， request就是一个可读流
	//	将其传递给request请求处理函数的第一个参数
	//	然后服务器将对于和该客户端进行通信的socket封装成一个相应对象 response， 然后作为回调函数的第二个参数
	//	传递给客户端，response 就是一个可写流。

		// console.log(`some client come in...`);
		console.log(`the request path is ${req.url}`);
		//如果使用 write方法，需要使用end结束相应
		res.write(`hello world`);
		res.end();

	//	end 之后的代码无法write
	// 	res.write(`haha`);
	//	GET http://127.0.0.1:3000/favicon.ico net::ERR_CONNECTION_REFUSED
	});

	server.listen(3000, () => {
		console.log(`server is listening the port of ${port}`);
	});




































