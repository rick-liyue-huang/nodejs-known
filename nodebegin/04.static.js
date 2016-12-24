/**
 * Created by leo on 24/12/16.
 */

// 与Apache比较，可以将静态文件放入到其中，然后调用相应的文件即可，而node则没有这样的服务，因此需要写入下面的代码。
    //    这就是node.js 的初步难点，
    //    让node.js提供一个静态服务就会非常困难。

//    这里的相对路径，需要时针对node 的当前环境，

//    总之： 路径和文件无关

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    if (req.url == '/fang') {
        fs.readFile('./04.testStatic.html', function (err, data) {
            res.writeHead(200, {"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
        });
    } else if (req.url == '/yuan') {
        fs.readFile('./04.testStatic2.html', function (err, data) {
            res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
            res.end(data);
        });
    } else if (req.url == '/image') {
        fs.readFile('./images.jpg', function (err, data) {
            res.writeHead(200, {"Content-type": "image/jpg"});
            res.end(data);
        });

    } else if (req.url == '/css') {
        fs.readFile('./04.testStatic3.css', function (err, data) {
            res.writeHead(200, {"Content-type": "text/css"});
            res.end(data);
        });

    }


});

server.listen(3000, local_host); // 127.0.0.1






















