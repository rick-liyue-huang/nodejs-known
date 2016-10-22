**Node.js Learning

A case :

a. The user should be able to use our application with a web browser
b. The user should see a welcome page when requesting http://localhost:8888/start which displays a  file upload form.
c. By choosing an image file to upload and submitting the form, this image should then be uploaded to http://localhost/upload, where it is displayed once the upload is finished.


In order to achieve the goal of this case

let's dissect our application. Which parts need to be implemented in order to fulfill the use case?

a. We want to serve web pages, therefore we need an HTTP server
b. Our server will answer differently to requests, depending on which URL the request was asking for, thus we need some kind of router in order to map requests to request handlers.
c. To fulfill the request that arrived at the server and have been routed using the router, we need actual request handlers.
d. The router probably should also treat any incoming POST data and give it to the request handlers in a convenient form, thus we need request data handling.
e. We not only want to handle requests for URLs, we also want to display content when these URLs are requested, which means we need some kind of view logic the request handlers can use in order to send content to  the user’s browser.
f. Last but not least, the user will be able to upload images, so we are going to need some kind of uploading handling which takes care of the details.

A basic HTTP server

I will not only focus on the actual code but also organising the code .
Normally it is easy to keep the different concerns of the code separated, by putting them in modules.
This allows you to have a clean main file, which you execute with Node.js, and clean modules that can be used by the main file and among each other.

So , let’s create a main file which we use to start our application, and module file where our HTTP server code lives. The main file named index.js, and makes sense to put our server module into a file named server.js.

var http = require("http");

http.createServer (function (request, response) {

response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
response.end();
}).listen(8888);

Analysing our HTTP server

The first line requires the http module that ships with Node.js and makes it accessible through the variable http.
We than call one of the functions the http module offers: createServer. This function returns an object, and this object has a method named listen, and takes a numeric value which indicates the port number our HTTP server is going to listen on.

// a simple edition of upper one. here server is object created by http.createServer function.
// var http = require("http");
// var server = http.createServer();
// server.listen(8888);

That would start an HTTP server listening at port 8888 and doing nothing else (not even answering any incoming request).  We should know that the really interesting part is the function definition right there where you would expect the first parameter of the createServer( ) call.

This function definition is the first parameter we are giving to the createServer( ) call. In JS, functions can be passed around any other value.

But here we actually doing: we pass the createServer function an anonymous function.

It’s important to note that this asynchronous , single-threaded, event-driven execution model is not an infinitely scalable performance unicorn with silver bullets attached. It is just one of several models, and it has its limitations. One being that as of now, Node.js is just one single process and it can run on only one single CPU core. Personally, I find this model quite approachable, because it allows you to write applications that have to deal with concurrency in an efficient and relatively straight ward manner.

var http = require("http");
var onRequest = function(request, response) {
console.log("request received");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello Rick");
response.end();
}
http.createServer(onRequest).listen(8888);

console.log("server has started”);

Note that I use console.log to output a text whenever the onRequest function is triggered, and another text right after starting the HTTP server.

When the callback fires and our onRequest function get triggered, two parameters are passed into it: request and response. Those two are objects, and you can use their methods to handle the details of the HTTP request that occurred and to respond to the request(i.e., to actually send something over the wire back to the browser that requested your server). And our code does just that: whenever a request is received, it uses the response.writeHead( ) function to send an HTTP status 200 and content-type in the HTTP response header, and the response.write( ) function to send the text “Hello Rick” in the HTTP response body. At last, we call response.end( ) to actually finish our response.

For finding a place for our server module.
We have the code for a very basic HTTP server in the file server.js and I mentioned that it is common to have a main file called index.js with is used to bootstrap and start our application by making use of the other modules of the application.

Turn out, we do not have to change that much. making some code a module means that we need to export those parts of its functionality that we want to provide to script that require our module. For now, the functionality our HTTP server needs to export is simple: scripts requiring our server module simply need to start the server. To make this possible, we will put our server code into a function named start, and we will export this function

var http = require("http");

function start() {

function onRequest(request, response) {
console.log("request received");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello Rick");
response.end();
}

http.createServer(onRequest).listen(8888);
console.log("server has started");
}

exports.start = start;

This way, we can now create our main file index.js and start our HTTP there, although the code for the server is still in our server.js file

var server = require("./server");

server.start();

As you can see, we can use our server module just like any internal module, by requiring its file and assigning it to a variable, its exported functions become available to us.

node index.js

now we can put different part of our application in place.

Making different HTTP requests points at different parts of our code is called “routing” — well, then let’s create a module called router.


















