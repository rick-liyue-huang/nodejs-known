    /**
     * Created by rickhuang on 21/3/17.
     */

    // ---- Step three ----
    /*
     *   we transfer the codes from outside index.js
     * */

    /*
        var express = require('express');
        var router = express.Router();

        router.get('/users/:name', function (req, res) {
            res.send('hello, ' + req.params.name);
        });

        module.exports = router;

    */


    // ---- Step four ----
    /*
    *  through res.render function to render ejs template, res.render method's first parameter is the template name, and
    *  'users' will match views/users.ejs, the second parameter is the data used to transfer to template, here will transfer
    *  'name'. The use of res.render is to combine template and data and produce html file. in the responding head, the
    *  'Content-Type: text/html' tell the browser that it will return html but not the text file. we visit
    *  localhost:3000/users/rickhuang.
    *
    * */

    var express = require('express');
    var router = express.Router();

    router.get('/:name', function (req, res) {
        res.render('users', {
            name: req.params.name
        });
    });

    module.exports = router;






























