/**
 * Created by rickhuang on 21/3/17.
 */

    /*
    *
    * 1, promise (promise/A+) is a mechanism, which includes three states: pending, fulfilled and rejected, and they transfer
    * only from pending to fulfilled or from pending to rejected, and are not reversible.
    * 2. then method can be called more times by the same promise method.
    * 3. then method must return one promise, and mostly we return the new promise.
    * 4. promise is constructor function.
    *
    * */

    function Promise(resolver) {}

    Promise.prototype.then = function () {};
    Promise.prototype.chtch = function () {};

    Promise.resolve = function () {};
    Promise.reject = function () {};
    Promise.all = function () {};
    Promise.race = function () {};

















































