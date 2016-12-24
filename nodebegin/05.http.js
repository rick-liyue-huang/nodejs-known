/**
 * Created by leo on 24/12/16.
 */

/*
* node.js中，讲很多的功能，划分为了一个个module，即模块，为了效率，用什么就引用什么
*
* */
//引用http 模块
var http = require('http');

// 创建一个服务器，回调函数表示接收到请求后做的事情
var server = http.createServer(function (req, res) {
    // req参数表示请//
    console.log('server received the response ' + req.url); // 如果没有加入res.end()，
    // 输入 127.0.0.1:3000 则这个网页会一直处于等待状态

    //statusCode, for 3digit code, such as 404, and the last argument, headers, are the response headers,
    res.writeHead(200, {"Content-type":"text/html;charset=UTF8"});

    res.write("<h1>this is first header</h1>");
    res.end("<h1>this is a header</h1>"); // 注意： res.end必须是字符串
    // res.end('success');
    // res.end();

});

//监听服务器的端口。
server.listen(3000, '127.0.0.1');






/*

var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type':'text/html;charset=UTF8'});
    res.end('<h1>hello world</h1>');
}).listen(3000, '127.0.0.1');

*/


































