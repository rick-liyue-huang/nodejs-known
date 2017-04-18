    /**
     * Created by rickhuang on 21/3/17.
     */

    /*
    * require used to load or import the file code, whereas exports or module.exports used to export the file code.
    *
    * */

    var a = {name: 1};
    var b = a;

    console.log(a); // 1
    console.log(b); //1

    b.name = 2;
    console.log(a); // 2
    console.log(b); // 2

    var b = {name: 3};
    console.log(a); // 2
    console.log(b); // 3

    /*
    *  a is an object, b is the reference of a, so object a and object b refer to the same memory space. It will output the
    *  same results. If we change the b, the content of the memory space a and b referred also change as well, so we find that
    *  a changed as result. But var b = {name: 3}; means that b refers to a new object, so it will create new memory space. Here
    *  b still refers to the old memory space, so b and a are different.
    *
    * */

    /*
    *  So we understand that:
    *  1> module.exports initial value is blank object {},
    *  2> exports refers to the module.exports,
    *  3> require() return the value of module.exports but not the exports.
    *
    *  so we can find some codes in the official web
    * */

    /*
    function require(...) {
        // ...
        ((module, exports) => {
            exports = some_func; // re-assigns exports, exports is no longer a shortcut, and nothing is exported

        module.exports = exports; // makes your module exports 0
        })(module, module.exports);

        return module;
    }
    */
//     exports = module.exports = {....};
//
// //    <=>
//     module.exports = {...};
//     exports = module.exports;








































































