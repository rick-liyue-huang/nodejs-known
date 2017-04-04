    /**
 * Created by rickhuang on 21/3/17.
 */
    /*
    *  this will be the main entrance file
    *
    * */

    // ---- Step one -----
    // produce an express instance app with root router controller listening 3000 port.
    // if we run "node index" in console, and then open the browser with address of "localhost:3000", it will show "hello express"

    /*
    var express = require('express');
    var app = express();

    app.get('/', function (req, res) {
        res.send('hello, express blog');
    });

    app.listen(3000);

        */


    // ---- Step two ----

    /*  we continue modify the index.js
    *  when we visit the root path, it still return "hello express", and when we visit "localhost:3000/users/rickhuang", it will return
    *  "hello, rickhuang", here ":name" in path is placeholder, and can get the true value by "req.params.name"
    *
    *  req contains the request info, and res contains the returned response info.
    *
    *  here have some req properties:
    *  req.query: the resolved querystring in url, for example ?name=rick, req.query value is {name: 'rick'}
    *  req.params: resolve the placeholder in url, for example /:name, if we visit /rick, value of req.params is {name: 'rick'}
    *  req.body: resolved request body, and need to use some module, such as body-parser, if the request body is {"name": "rick"},
    *  the req.body is {name: 'rick'}
    *
    * */

    /*
        var express = require('express');
        var app = express();

        app.get('/', function (req, res) {
            res.send('hello express blog');
        });

        app.get('/users/:name', function (req, res) {
            res.send('hello, ' + req.params.name);
        });

        app.listen(3000);
    */


    // ---- Step three ----
    /*
     *   here we put all the routers functions in the index.js, but in fact we can use express.Router to solve it,
     *   so we need to create a blank folder named router, and then create index.js and users.js under the "router" folder.
     *   at last, transfer the route part in index.js to route folder files.
     *
     *
     *
     *   here we put "/" and "/users/:name" route in the routes/index.js and routes/users.js respectively, and then
     *   each route file creates a express.Router instance router and then exports.
     *   In the outside index.js, we use "app.use" to load the different files. We recommend the latter ones.
     * */


    /*
        var express = require('express');
        var app = express();

        var indexRouter = require('./routes/index');
        var userRouter = require('./routes/users');

        app.use('/', indexRouter);
        app.use('/users', userRouter);

        app.listen(3000);

    */


    // ---- Step four ----
    /*
    *  we will use template engine ejs to index.js
    *
    * */


    var path = require('path');
    var express = require('express');
    var app = express();

    var indexRouter = require('./routes/index');
    var userRouter = require('./routes/users');

    app.set('views', path.join(__dirname, 'views')); // setting the directory used to store template file
    app.set('view engine', 'ejs'); // setting the template engine as ejs

    app.use('/', indexRouter);
    app.use('/users', userRouter);

    app.listen(3000);










































