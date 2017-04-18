

## A full blown web application with Node.js

• We want to serve web pages, therefore we need an HTTP server
• Our server will need to answer differently to requests, depending on which URL the request
was asking for, thus we need some kind of router in order to map requests to request handlers
• To fullfill the requests that arrived at the server and have been routed using the router, we
need actual request handlers
• The router probably should also treat any incoming POST data and give it to the request
handlers in a convenient form, thus we need request data handling
• We not only want to handle requests for URLs, we also want to display content when these
URLs are requested, which means we need some kind of view logic the request handlers can
use in order to send content to the user’s browser
• Last but not least, the user will be able to upload images, so we are going to need some kind
of upload handling which takes care of the details

### 1. It contains some uses:
1.1 The user should be able to use our application with a web browser;
1.2 The user should see a welcome page when requesting http://localhost:8888/start which displays a file upload form;
1.3 By chooseing an image file to upload and submitting the form, this image should then be uploading to http://localhost:8888/upload, where it is desplayed once the upload is finished.

###2. Dissect the application 
2.1 we want to serve web pages, therefore we need an HTTP server;
2.2 Our server will need to answer differently to requests, depending on which URL the request was asking for, thus we need some kind of router in order to map requests to request handlers;
2.3 The router probably should also treat any incoming POST data and give it to the request handlers in a convenient form, thus we need request data handling;
2.4 We not only want to handle requests for URLs, we also want to display content when these URLs are requested, which means we need some kind of view logic the request handlers can use in order to send content to the users's browser;
2.5 The user will be able to upload images, so we are going to need some kind of uploading handling which takes care of the details.

###3. Callback as parameters of the function

Execution model of Node.js is different, there is only one single process, If there is a slow database query somewhere in this process, this affects the whole process - everything comes to a halt until the slow query has finished. To avoid this, JS and Node.js introduces the concept of event-driven, asynchronous callbacks, by utilizing an event loop.

It is important to note that this asynchronous, signle-threaded, event-dreiven execution is one of several models and it has its limitations.

###4. The route request for different path

We need to be able to feed the requested URL and possible additional GET and POST parameters into our router, and based on these the router then needs to be able to decide which code to execute. We need to look into the HTTP requests and extract the requested URL as well as the GET/POST parameters from them. So we will need two more modules, "url" and "querystring". "url" module provides methods which allow us to extract the different parts of a URL and querystring an in turn be used to parse the query string for request parameters.

for example:  http://localhost:8888/start?foo=bar&hello=world

url.parse(string).pathname :  /start
url.parse(string).query: foo=bar&hello=world

querystring.parse(string)["foo"]: bar
querystring.parse(string)["hello"]: world


###5. Create a new file named router.js 

and we will wire together this router with our server before puting more logic into the router.

Here the url module provides methods which allows us to extract the different parts of a URL likes the requested path and query string, and querystring can in turn be used to parse the query string for request parameters.

                              url.parse(string).query
                                         |
             url.parse(string).pathname  |
                         |               |
                         |               |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
           querystring.parse(string)["foo"] |
                                            |
                             querystring.parse(string)["hello"]


###5. Routing to real request handlers

Let’s call these functions, where requests are routed to, request handlers. And let’s tackle those next, because unless we have these in place there isn’t much sense in doing anything with the router for now.


###6. Put the expensive operation in the child_process

###7. import the node-formidable for upload 



























