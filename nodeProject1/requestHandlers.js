

	// import the child process
	const exec = require(`child_process`).exec;

	function start (response) {
		console.log(`Request handler "start" was called.`);

		// function sleep(milliseconds) {
		// 	let startTime = new Date().getTime();
		// 	while(new Date().getTime() < startTime + milliseconds);
		// }
		// sleep(5000);

		// let content = `empty`;

		// exec(`find /`, {timeout: 10000, maxBuffer: 20000*1024}, (err, stdout, stderr) => {
		// 	response.writeHead(200, {"Content-Type": "text/plain"});
		// 	response.write(stdout);
		// 	response.end();
		// });

		// return "Hello start";
		// return content;

		let body = `<html>
		<head>
		<meta http-equiv="Content-Type" content="text/html"; charset=UTF-8"/>
		</head>
		<body>
		<form action="/upload" method="post">
		<textarea name="text" rows="20" cols="60"></textarea>
		<input type="submit" value="Submit text" />
		</form>
		</body>
		</html>`;

		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(body);
		response.end();
	}

	function upload (response) {
		console.log(`Request handler "upload" was called`);
		// return "hello upload";
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("hello upload");
		response.end();
	}

	module.exports = {
		start: start,
		upload: upload
	};




































