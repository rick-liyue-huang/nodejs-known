

function route (handle, pathname, response, request/*, postData*/) {
	console.log(`About to route a request for ${pathname}`); 

	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response, request/*, postData*/);
	} else {
		console.log(`no request handler found for ${pathname}`);
		// return `404 nod found`;
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not Found");
		response.end();
	}
}

exports.route = route;