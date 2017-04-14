
about express module

req and res 都是 非侵入式的， non intrusive

res.send() 可以接受基本数据和json array object 


1. 创建服务
let server = express();
2. 监听
server.listen(port);
3.处理请求 
server.use(`地址`, (req, res)=>{});


3种方法
get(`/`, (req, res) => {})
post(`/`, (req, res) => {})
use(`/`, (req, res) => {});

express-static 是一个中间件的插件，用来加载静态文件

类似于 readFile之类的

定义接口
/login?user=xxx&pass=xxx

{ok: true/false, msg: '原因'}

express-parser 用来处理 post方法， 引导出 req.body 

express 的链式操作


























