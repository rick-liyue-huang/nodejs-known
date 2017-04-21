
body-parser --- 用来解析post的数据  application/x-www-form-urlencoded

server.use(bodyParser());

multer --- 解析post文件   multipart/form-data

let obj = multer({dest: ''});

server.use(obj.any());

server.use('', (err, data) => {
	req.files[0].originalname
	req.files[0].path
});




express 整合

模板引擎

express 模板引擎

consolidate --- 用于适配或者说整合不同的模板引擎

------------------------------------

模板引擎 适配

1. consolidate module used to import the different template engine.

包括： 
server.set('view enginer', 'html'); 

server.set('views', './views模板目录');

server.engine('html', consolidate.ejs);

server.get('/', (req, res) => {
	
});


------------------------------

route ---- 路由

把不同的目录，对应到不同的模块

xxxx.com/aaa module1
xxxx.com/news module2
xxxx.com/user module3

server.get() server.post() server.use()

Router --- 迷你的server, 或者说 子服务器

Router.get() Router.post() Router.use() 都是类似的

创建 router
let router = express.Router();

server.use('/user', router);  把router添加到server


// router 内部 ,也就是在 /user 子目录下面
router.get('/index.html', (req, res) => {});

------------------------------------------------------

























