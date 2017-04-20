

	// import the child process
	const exec = require(`child_process`).exec;
	const querystring = require(`querystring`);
	const fs = require(`fs`);
	const formidable = require(`formidable`);

	function start (response/*, postData*/) {
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
		<form action="/upload" enctype="multipart/form-data" method="post">
		<textarea name="text" rows="20" cols="60"></textarea>
		<input type="file" name="upload" multiple="multiple" />
		<input type="submit" value="Upload file" />
		</form>
		</body>
		</html>`;

		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(body);
		response.end();
	}

	function upload(response, request) {
		 console.log("Request handler 'upload' was called.");
		
		 var form = new formidable.IncomingForm();
		 console.log("about to parse");
		 form.parse(request, function(error, fields, files) {
		 console.log("parsing done");
		
		 /* Possible error on Windows systems:
		 tried to rename to an already existing file */
		 fs.rename(files.upload.path, "/tmp/test.png", function(error) {
		 if (error) {
		 fs.unlink("./tmp/test.png");
		 fs.rename(files.upload.path, "./tmp/test.png");
		 }
		 });
		 response.writeHead(200, {"Content-Type": "text/html"});
		 response.write("received image:<br/>");
		 response.write("<img src='/show' />");
		 response.end();
		 });
	 }

	function show(response) {
		console.log(`Request handler "show" was called`);
		response.writeHead(200, {"Content-Type": "image/png"});
		fs.createReadStream(`./tmp/test.png`).pipe(response);
	}

	module.exports = {
		start: start,
		upload: upload,
		show: show
	};



































