/**
 * Created by rickhuang on 21/3/17.
 */

"use strict";

/*
* 1. require used load (import) one file data, including .js, .json and .node. If the files have not suffix, it will
  load in order .js .json and .node.

  2.require loading is synchronous, so we cannot use setTimeout() or setInterval() methods, so

 setTimeout(() => {
 module.exports = {a: "ok"};
 }, 0);

 will get a blank brace {}

 3.require's directory rule is that :
 1> If directory contains package.json, and also indicates the "main" key, it will use [main] value,
 2> if does not contain the package.json, it will loading index.js then index.node in the current directory.

 4. require loaded files will put in the cache, so it will not load the same files twice or more.

 5. we have two methods used to determine the the entry file:
 1> require.main === module (recommended)
 2> module.parent === null

 6. circular reference (or circular dependencies), which means that file A refers the file B, and also the file B refers A.
 It will results that both file get the blank object {}. In order to solve that, we can
 1> detach the common code to another file C, whch meant that A requires C, and B requires C.
 2> require the files inside the function instead of the outer (global) part.

* */










































