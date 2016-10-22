
// // function start() {
// // 	console.log("request handler 'start' was called");
// // }

// // function upload() {
// // 	console.log("request handler 'upload' was called");
// // }

// // exports.start = start;
// // exports.upload = upload;

// // var exec = require("child_process").exec;

// // function start(response) {
// // 	console.log("request handler 'start' was called");

// // 	// exec("ls -lah", 
// // 	exec("find /", {timeout: 2000, maxBuffer: 20000*1024},

// // 		function(error, stdout, stderr) {
// // 		response.writeHead(200, {"Content-Type": "text/plain"});
// // 		response.write(stdout);
// // 		response.end();
// // 	});
// // }

// // function upload(response) {
// // 	console.log("request handler 'upload' was called");
// // 	response.writeHead(200, {"Content-Type": "text/plain"});
// // 	response.write("hello upload");
// // 	response.end();

// // }

// // exports.start = start;
// // exports.upload = upload;

// // var exec = require("child_process").exec;

// // function start(response) {
// // 	console.log("request handler 'start' was called");

// // 	var body = '<html>' +
// // 				'<head>' +
// // 				'<meta http-equiv="Content-Type" content="text/html; ' +
// // 				'charset=UTF-8" />' +
// // 				'</head>' +
// // 				'<body>' +
// // 				'<form action="/upload" method="post">'+
// // 				'<textarea name="text" rows="20" cols="60"></textarea>'+
// // 				'<input type="submit" value="Submit text" />'+
// // 				'</form>'+
// // 				'</body>'+
// // 				'</html>';

// // 	response.writeHead(200, {"Content-Type": "text/html"});
// // 	response.write(body);
// // 	response.end();
// // }


// // function upload(response) {
// // 	console.log("request handler 'upload' was called");
// // 	response.writeHead(200, {"Content-Type": "text/plain"});
// // 	response.write("hello upload");
// // 	response.end();

// // }

// // exports.start = start;
// // exports.upload = upload;

// // var querystring = require("querystring");

// // function start(response, postData) {
// // 	console.log("request handler 'start' was called");

// // 	var body = '<html>' +
// // 				'<head>' +
// // 				'<meta http-equiv="Content-Type" content="text/html; ' +
// // 				'charset=UTF-8" />' +
// // 				'</head>' +
// // 				'<body>' +
// // 				'<form action="/upload" method="post">'+
// // 				'<textarea name="text" rows="20" cols="60"></textarea>'+
// // 				'<input type="submit" value="Submit text" />'+
// // 				'</form>'+
// // 				'</body>'+
// // 				'</html>';

// // 	response.writeHead(200, {"Content-Type": "text/html"});
// // 	response.write(body);
// // 	response.end();
// // }


// // function upload(response, postData) {
// // 	console.log("request handler 'upload' was called");
// // 	response.writeHead(200, {"Content-Type": "text/plain"});
// // 	response.write("you've sent text: " + 
// // 		querystring.parse(postData).text);
// // 	response.end();

// // }

// // exports.start = start;
// // exports.upload = upload;

// var querystring = require("querystring"),
// 	fs = require("fs");

// function start(response, postData) {
// 	console.log("request handler 'start' was called");

// 	var body = '<html>' +
// 				'<head>' +
// 				'<meta http-equiv="Content-Type" content="text/html; ' +
// 				'charset=UTF-8" />' +
// 				'</head>' +
// 				'<body>' +
// 				'<form action="/upload" method="post">'+
// 				'<textarea name="text" rows="20" cols="60"></textarea>'+
// 				'<input type="submit" value="Submit text" />'+
// 				'</form>'+
// 				'</body>'+
// 				'</html>';

// 	response.writeHead(200, {"Content-Type": "text/html"});
// 	response.write(body);
// 	response.end();
// }


// function upload(response, postData) {
// 	console.log("request handler 'upload' was called");
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("you've sent text: " + 
// 		querystring.parse(postData).text);
// 	response.end();

// }

// function show(response) {
// 	console.log("request handler 'show' was called ");
// 	response.writeHead(200, {"Content-Type": "image/png"});
// 	fs.createReadStream("/tmp/test.pnhg").pipe(response);
// }

// exports.start = start;
// exports.upload = upload;
// exports.show = show;




// function start() {
// 	console.log("request handler 'start' was called");
// }

// function upload() {
// 	console.log("request handler 'upload' was called");
// }

// exports.start = start;
// exports.upload = upload;

// var exec = require("child_process").exec;

// function start(response) {
// 	console.log("request handler 'start' was called");

// 	// exec("ls -lah", 
// 	exec("find /", {timeout: 2000, maxBuffer: 20000*1024},

// 		function(error, stdout, stderr) {
// 		response.writeHead(200, {"Content-Type": "text/plain"});
// 		response.write(stdout);
// 		response.end();
// 	});
// }

// function upload(response) {
// 	console.log("request handler 'upload' was called");
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("hello upload");
// 	response.end();

// }

// exports.start = start;
// exports.upload = upload;

// var exec = require("child_process").exec;

// function start(response) {
// 	console.log("request handler 'start' was called");

// 	var body = '<html>' +
// 				'<head>' +
// 				'<meta http-equiv="Content-Type" content="text/html; ' +
// 				'charset=UTF-8" />' +
// 				'</head>' +
// 				'<body>' +
// 				'<form action="/upload" method="post">'+
// 				'<textarea name="text" rows="20" cols="60"></textarea>'+
// 				'<input type="submit" value="Submit text" />'+
// 				'</form>'+
// 				'</body>'+
// 				'</html>';

// 	response.writeHead(200, {"Content-Type": "text/html"});
// 	response.write(body);
// 	response.end();
// }


// function upload(response) {
// 	console.log("request handler 'upload' was called");
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("hello upload");
// 	response.end();

// }

// exports.start = start;
// exports.upload = upload;

// var querystring = require("querystring");

// function start(response, postData) {
// 	console.log("request handler 'start' was called");

// 	var body = '<html>' +
// 				'<head>' +
// 				'<meta http-equiv="Content-Type" content="text/html; ' +
// 				'charset=UTF-8" />' +
// 				'</head>' +
// 				'<body>' +
// 				'<form action="/upload" method="post">'+
// 				'<textarea name="text" rows="20" cols="60"></textarea>'+
// 				'<input type="submit" value="Submit text" />'+
// 				'</form>'+
// 				'</body>'+
// 				'</html>';

// 	response.writeHead(200, {"Content-Type": "text/html"});
// 	response.write(body);
// 	response.end();
// }


// function upload(response, postData) {
// 	console.log("request handler 'upload' was called");
// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("you've sent text: " + 
// 		querystring.parse(postData).text);
// 	response.end();

// }

// exports.start = start;
// exports.upload = upload;

var querystring = require("querystring"),
	fs = require("fs");

function start(response) {
	console.log("request handler 'start' was called");

	var body = '<html>' +
				'<head>' +
				'<meta http-equiv="Content-Type" content="text/html; ' +
				'charset=UTF-8" />' +
				'</head>' +
				'<body>' +
				'<form action="/upload" method="post">'+
				'<textarea name="text" rows="20" cols="60"></textarea>'+
				'<input type="submit" value="Submit text" />'+
				'</form>'+
				'</body>'+
				'</html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}


function upload(response, request) {
	console.log("request handler 'upload' was called");
	
	var form = new formidable.IncomingForm();
 	console.log("about to parse");
 	form.parse(request, function(error, fields, files) {
 	console.log("parsing done");
	
	 /* Possible error on Windows systems:
 	tried to rename to an already existing file */
 	fs.rename(files.upload.path, "/tmp/test.png", function(error) {
 		if (error) {
 			fs.unlink("/tmp/test.png");
 			fs.rename(files.upload.path, "/tmp/test.png");
 		}
 	});

 	response.writeHead(200, {"Content-Type": "text/html"});
 	response.write("received image:<br/>");
 	response.write("<img src='/show' />");
 	response.end();
 	
	});

}

function show(response) {
	console.log("request handler 'show' was called ");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("/tmp/test.pnhg").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;

























































