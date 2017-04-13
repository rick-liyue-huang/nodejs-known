

//  we use our server module just like any internal modules by requiring its file and assigning it to
//  a variable, its exported functions become available to us.

 const server = require(`./server.js`);
 const router = require(`./router.js`);
 const requestHandlers = require(`./requestHandlers.js`);

 let handle = {};

 handle[`/`] = requestHandlers.start;
 handle[`/start`] = requestHandlers.start;
 handle[`/upload`] = requestHandlers.upload;

 server.start(router.route, handle);


























