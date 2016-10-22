//  a simple express application 


//  means that will import the module of "express", and assign to the variable 'express'
 const express = require('express');

// call a 'express' instance, and this instance is a function, which will be assign to a app variable, if no args inside.
 let app = express();

/*
app has many methods, including get, post, put/patch and delete and so on,here we will use
get method to assign a handler function for the url path of '/'. The handler function
has two args of 'req' and 'res', expresent for the 'request' and 'response' respectively.
'req' contains the info from browser, such as query, body, header, which can be gotton by 'req' object.
'res' object used to get info from server, which transmit to browsers, such as the 'header' info or
 some output content on browsers.
 here just simply output some string on browser by res object's send method.

*/ 

// app.get('/', function(req, res) {
// 	res.send('Hello World');
// });
 app.get('/', (req, res) => {
	res.send('Hello world!');
 });


/*
after define the app, let app 'listen' the local 3000 port, 
the second arg is a callback function, which will be invoked after 'listen' act is successful.
here we will implement the console.log output. 

*/ 

 app.listen(3000, (() => {
	console.log('app is listening at port 3000');
 }));

/*
端口的作用： 通过端口来区分出同一电脑内不同应用或者进程， 从而实现一条物理网线同时链接多个程序
端口号是一个16位的unit，所以其范围为 1 to 65535
app.listen(3000), 进程就被打标，电脑接收到的3000端口的网络消息就会被发送给我们启动的这个进程

URL
<scheme>://<host>:<port>/<url-path>
scheme=http, host=localhost, port=3000, url-path=/

*/




























