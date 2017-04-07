

/*
	const server = require(`./server.js`);
	const router = require(`./router.js`);

	// import the new requesthandlers module
	const requestHandlers = require(`./requestHandlers.js`);

	var handle = {};

	handle[`/`] = requestHandlers.start;
	handle[`/start`] = requestHandlers.start;
	handle[`/upload`] = requestHandlers.upload;

	server.start(router.route, handle);


	*/

	const server = require(`./server.js`);
	const router = require(`./router.js`);

	server.start(router.route);


























