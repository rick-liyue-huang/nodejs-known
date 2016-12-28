

// node.js是一个在浏览器之外的可以解析和执行JS代码的运行环境个，后者说是一个运行时平台runtime，理论上就是JS 在服务器端的运行环境
//JS语言通过node在服务器运行，在这个意义上说，node有点像js虚拟机
//node提供大量的工具库，使得JS可以与操作系统互动（读写文件，网络IO，操作进程），因此也可以说node又是JS工具库。

/*
* node.js可以做什么？
* 操作文件（创建文件，删除文件，修改文件，删除文件）
* 提供web服务（在node中可以接受客户端的请求了）
* 可以开发一些命令行工具软件
* 可以开发动态网站，具有用户业务交互功能的web站点，涉及到数据交互，比如用户注册和用户登录，商品的展示
* 可以将之前的静态页面动态化。
* */

/*
* chrome浏览器的实现结构
* webkit - 渲染，布局引擎
* V8 - JS解析执行引擎
* 中间层 - （dom bom）
* 硬件层 -
*
*
* nodejs实现结构
* v8 - JS解析执行引擎
* 中间层 - 提供了文件操作，网络操作登录接口
* 硬件层
* 也就是说 node不用考虑DOM,BOM,HTML，CSS， 渲染，只是关心业务功能
* 操作持久化数据
* node.js 和 PHP有什么区别：
* 他们都能操作文件，都有和操作系统同底层打交道的API，他们都可以网络操作，网络服务，
* PHP需要和apache结合起来才可以提供web服务
* node.js摒弃了以往所有而服务器，本身自己就是服务器，Java， PHP，。net能做的事情node.js都可以做，并且可能更好。
* */

/*
* facebook, twitter, google, alibaba, tencent, baidu.
*
* 技术博客，以及一些书
* */

// we start with a simple code, but it will run in terminal. The terminal will be the server.
// the console.log is the most common use in terminal and also the most
// important debug tool in mode.js


"use strict";

setTimeout(() => {

	console.log('hello world');
}, 2000);










