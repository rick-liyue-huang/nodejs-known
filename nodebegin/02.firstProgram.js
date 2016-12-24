/**
 * Created by leo on 24/12/16.
 */

// require 就是引包，就是引用自己的一个特殊功能。
var http = require('http');

// 创建服务器，参数是一个回调函数，表示如果请求进来要做什么
var server = http.createServer(function (req, res) {

    // req表示请求， res表示相应， response
    //设置HTTP头部，状态码，文件类型是html，字符集是utf8
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
    res.end('this is my first node page ' + (1 + 2 + 3) + 's');
});


// 运行服务器,监听3000端口，端口号可以任意改动, 然后在终端输入 node 02.firstProgram.js
server.listen(3000, '127.0.0.1');

// 推荐不哟啊使用完整的目录名，而是使用相对目录。

// node.js是服务器的程序，写的js语句都将运行在服务器上，返回给客户的都是已经处理好的纯html
//如果想修改程序，必须中断当前的程序，即中断服务器，然后再node 打开服务器。

//node 是直接运行在控制台里的，因此是可以直接用node打开 .js文件，同时知道浏览器不能直接运行.js文件的，必须首先搭载html骨架才可以。
// 任何.js都可已通过node来运行，因此node 就是js的执行环境。