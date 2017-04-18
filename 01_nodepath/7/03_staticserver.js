
"use strict";


// think of the static resource server
const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);
const mimeObj = require(`./mime.json`);

const server = http.createServer();
let port = 3000;

server.on(`request`, (req, res) => {

    // res.setHeader(`Content-Type`, `text/plain; charset=utf-8`);
    // res.statusCode = 200;
    // res.statusMessage = `successful`;

    //we'd better to tell the client the send data type
    // res.writeHead(200, `okok`, {'Content-Type': 'text/plain; charset=utf-8'});
    //
    // res.end(`the client request url is ${req.url}`);

    let url = decodeURI(req.url);

//    when user visit /index.html , we read path.join(__dirname, url)
//    when user visit /css/main.css, we read path.join(__dirname, url)

    let filePath = path.join(__dirname, url);

    fs.readFile(filePath, (err, data) => {
        if (err) {
           return res.end(err.message); // to read error info in front, it is easier in development
        }


            let mime =  mimeObj[path.extname(filePath)] || 'text/plain; charset=utf-8';
            mime.startsWith('text/') ?
                mime += '; charset=utf-8' :
                mime;

        res.writeHead(200, {
            'ContentType': mime
        });

    //    here means that code can continue
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`the server is listening the port of ${port}`);
});




































