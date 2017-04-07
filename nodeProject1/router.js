/*
	function route(handle, pathname) {
		console.log(`About to route a request for ${pathname}`);

		if (typeof handle[pathname] === 'function') {
			return handle[pathname]();
		} else {
			console.log(`No request handler found for ${pathname}`);
			return `404 Not Found`;
		}
	}

	module.exports.route = route;

	*/



	function route(pathname) {
		console.log(`About ${pathname} is called`);
	}

	module.exports.route = route;
































