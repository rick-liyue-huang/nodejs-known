
var http = require('http');
var url = require('url');
// http://127.0.0.1:3000/?name=rick&age=13&sex=male
var server = http.createServer(function (req, res) {

    var queryObj = url.parse(req.url, true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;

    res.end('server recevied the form request: ' + name + " " + age + " " + sex); // server recevied the form request:  rick 13 male
}).listen(3000, '127.0.0.1');