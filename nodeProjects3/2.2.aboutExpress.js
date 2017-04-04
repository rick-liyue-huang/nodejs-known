

    /**
 * Created by leo on 21/3/17.
 */
    /*
    *  The essential of express is its middleware, which is used to deal with request. After one middleware finish its request, it will
    *  transfer to the next middleware through "next()" method. If here has no next(), it will never transfer to the next middleware.
    *  For example, the buildin res.render method will return the result to the client end without call next() method, so it will not
    *  transfer to the next middleware.
    *  we can see one example,
    * */

    /*
        var express = require('express');
        var app = express();

        app.use(function (req, res, next) {
            console.log("1");
            next();
        });

        app.use(function (req, res, next) {
            console.log('2');
            res.status(200).end();
        });

        app.listen(3000);

    */
    /*
    *  here we use app.use to load middleware, in the middleware, we use next() to transfer the request to the next middleware.
    *  next() can receive a parameter for error info. If we use next(error), it will return one error info and not transfer to the next middleware.
    *  we can modify the upon codes as follow
    * */

    /*
        var express = require('express');
        var app = express();

        app.use(function (req, res, next) {
            console.log('1');
            next(new Error('heihei'));
        });

        app.use(function (req, res, next) {
            console.log('2');
            res.status(200).end();
        });

        app.listen(3000);

    */

    /*
    *  error handle used to deal with the error info manually
    *
    * */

    var express = require('express');
    var app = express();

    app.use(function (req, res, next) {
        console.log('1');
        next(new Error('heihei'));
    });

    app.use(function (req, res, next) {
        console.log('2');
        res.status(200).end();
    });

    // error handle
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    app.listen(3000);






































