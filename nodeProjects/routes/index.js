    /**
     * Created by rickhuang on 21/3/17.
     */

    // ---- Step three ----
    /*
    *   we transfer the codes from outside index.js
    * */

    var express = require('express');
    var router = express.Router();

    router.get('/', function (req, res) {
        res.send('hello, express blog');
    });

    module.exports = router;