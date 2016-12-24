/*
* req.url 属性，表示用户的请求url地址。
* 所有的路由设计都是通过req.url来实现的
* */

var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    console.log(req.url); // http://127.0.0.1:3000/abc/1.html#abc?id=1234 得到的是 /abc/1.html
//    我们关心的 不是拿到 url， 而是 识别这个url
//     识别URL用到两个新模块， 第一个是url模块， 第二个是querystring 模块
    /*
    * querystring.parse('foo=bar&baz=qux&baz=quux&corge'); => {foo:'bar', baz: ['qux', 'quux'], corge: ''}
    *
    * querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
    * returns 'foo=bar&baz=qux&baz=quux&corge='
    *
    * url.parse() 可以将一个完整的URL地址分为很多部分。
    * ┌─────────────────────────────────────────────────────────────────────────────┐
     │                                    href                                     │
     ├──────────┬┬───────────┬─────────────────┬───────────────────────────┬───────┤
     │ protocol ││   auth    │      host       │           path            │ hash  │
     │          ││           ├──────────┬──────┼──────────┬────────────────┤       │
     │          ││           │ hostname │ port │ pathname │     search     │       │
     │          ││           │          │      │          ├─┬──────────────┤       │
     │          ││           │          │      │          │ │    query     │       │
     "  http:   // user:pass @ host.com : 8080   /p/a/t/h  ?  query=string   #hash "
     │          ││           │          │      │          │ │              │       │
     └──────────┴┴───────────┴──────────┴──────┴──────────┴─┴──────────────┴───────┘
     (all spaces in the "" line should be ignored -- they are purely for formatting)

     http://127.0.0.1:3000/abc/1.html?id=1234&sex=man&age=10
    * */
    var pathname = url.parse(req.url).pathname; // parse可以将完整的路径通过属性区分开来
    console.log("pathname: " + pathname); //pathname: /abc/1.html

    var query = url.parse(req.url).query;
    console.log('query: ' + query); // query: id=1234&sex=man&age=10

    var query1 = url.parse(req.url, true).query; // 加入true后，将字符串转化为了k-v键值对数组
    console.log(query1); // { id: '1234', sex: 'man', age: '10' }

    //注意这里 加入true 相当于 querystring.parse。

    console.log(query1.age); // 10

    var host = url.parse(req.url).host;
    console.log(host);

    var protocol = url.parse(req.url).protocol;
    console.log(protocol);
    res.end();

}).listen(3000, '127.0.0.1');





























