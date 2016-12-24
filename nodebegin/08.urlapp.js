
// 当用户访问/student/1234567890 查询次学号的学生信息
// 当用户访问/teacher/123456 的时候， 查询此老师的信息
// 其他的， 我们提示错误，如果位数不对，也是提示位数不对

var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

    var userurl = req.url;

    res.writeHead(200, {"Content-type":"text/html;charset=UTF"});

    // 利用substr 函数判断此时的开头
    if (userurl.substr(0, 9) === "/student/") {

        var studentid = userurl.substr(9);
        if (/^\d{10}$/.test(studentid)) {
            res.end('the student id is ' + studentid);
        } else {
            res.end('the student id number is wrong');
        }
    } else if (userurl.substr(0,9) == "/teacher/") {

        var teacherid = userurl.substr(9);
        if (/^\d{6}$/.test(teacherid)) {
            res.end('the teacher id is ' + teacherid);
        } else {
            res.end('the teacher id number is wrong');
        }
    } else {
        res.end('pls check id');
    }


    res.end();
}).listen(3000, '127.0.0.1');



























