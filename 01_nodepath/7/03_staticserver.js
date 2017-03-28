
"use strict";


// think of the static resource server
const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);

const server = http.createServer();
let port = 3000;

server.on(`request`, (req, res) => {

    // res.setHeader(`Content-Type`, `text/plain; charset=utf-8`);
    // res.statusCode = 200;
    // res.statusMessage = `successful`;

    //we'd better to tell the client the send data type
    res.writeHead(200, `okok`, {'Content-Type': 'text/plain; charset=utf-8'});

    res.end(`the client request url is ${req.url}`);
});

server.listen(port, () => {
    console.log(`the server is listening the port of ${port}`);
});




































