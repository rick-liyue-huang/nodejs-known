

// fs 用于文件操作，都是异步的 fs.readFile(file[, options], callback)

var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req, res) {

    var userId = parseInt(Math.random() * 89999) + 10000;
    console.log('welcome ' + userId);

    if (req.url == './favicon.ico') return; // 处理小图标，

    // res.writeHead(200, {'Content-type':'text/html;charset=UTF8'});
    fs.readFile('./node begin.md', function (err, data) {
        if (err) {
            throw new Error(); // 因为是单线程的，因此防止堵塞
        }
        console.log(userId + ' file finished');
        res.end(data);
    });
    console.log(2); // 先2后1

}).listen(3000, '127.0.0.1');
