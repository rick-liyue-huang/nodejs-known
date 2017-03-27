
"use strict";

const net = require('net');

// create server
const server = net.createServer();

const port = 3000;

// once client connect with server, it will trigger the `connection` event
server.on(`connection`, (socket) => {
    console.log(`some client is coming in`);

    // once client is wrong, it will trigger `error` event
    socket.on(`error`, (err) => {
        console.log(`some wrong with the client`);
    });

    // once client send the data, the server will trigger the `data` event
    socket.on(`data`, (data) => {
        data = data.toString();
        console.log(`the server receive the "${data}" from client`);
    });
});

// server is listening the port
server.listen(port, () => {
    console.log(`the server is listening the port of ${port}`);
});




/*

1. 'server is listening at port 3000' in server terminal, when trigger 'connection' event.
2. 'some client is connecting to this server.' in server terminal, when server listen port 3000
3. 'this client connects to server successfully' respondingly show in client terminal, when client trigger 
    'connect' event.
4. client send 'hello' to server.
5. server will trigger the 'data' event and show 'hello', and then send 'world' to client
6. client show 'world' in client terminal.
7. if server exits, client terminal will show 'disconnected from server' by triggerring 'end' event.

*/

























