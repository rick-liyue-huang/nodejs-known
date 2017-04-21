
	cookie : in browsers

	保存数据

	不安全， 并且 只能最多是 4k

	session: in server

	安全 无限大小， 也是用于保存数据

	session 是依赖于 cookie

	cookie 中有一个 session 的 ID， 服务器利用 sessionid 找到session 文件， 读取 写入

	隐患： session 劫持

	cookie-parser

	cookie-session

	server.use(cookieParseer());
	server.use(cookieSession({

		}));
	
	delete req.session




	1. cookie -  存在浏览器中 4k， 不安全

	签名， 加密

	session - 存在服务器

	不能独立存在，是基于cookie

	在 cookie中 存一个 session id， 是不变的， 当地次访问浏览器的时候就存到里面

	server.use(cookieParser(`签名字符串`));
	server.use(cookieSession({
		keys: arr,
		maxAge: time
		}));

	server.use((req, res) => {
		req.secret (`签名字符串`)
		res.cookie(名字， 值， {signed, true});

		res.cookie[`user`]
		res.clearCookie(`user`);
		
		res.session[`xxx`];

		delete res.session;  // 因为 session依托于 cookie但是 是 存储在浏览器中
		所以可以使用 delete

		而 cookie是存储在 浏览器中， 因此 需要使用 clear

		})

























