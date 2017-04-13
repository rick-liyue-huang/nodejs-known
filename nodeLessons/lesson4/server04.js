
// post used to send big data

const http = require(`http`);
const querystring = require(`querystring`);

http.createServer((req, res) => {

	let str = ``;
	let i = 0;
	req.on(`data`, (data) => { // 每段数据过来就发送，因此可以很多次
		console.log(`${i++} time`)
		str += data;
	});

	req.on(`end`, () => { // 全部结束后才发送
		// console.log(str);
		let POST = querystring.parse(str);
	});

}).listen(6688);