
cookie 
1. 读取 --- cookie-parse
2. 发送 --- 
session
cookie-session

cookie:
cookie 空间非常小，省着用
安全性能比较差

精打细算
校验cookie 是否被篡改过

发送 cookie
res.secret = '字符串'
res.cookiew()

读取cookie
cookie-parser 

server.use(cookieParser('秘钥'))

server.use(function() {
    req.cookies;
    req.signedCookiew 
});

删去cookie
res.clearCookiew(名字)



session: 

cookie-session

server.use(cookieParser())
server.use(cookieSession({
    keys: []
}));

delete req.session 

写入 

读取





















