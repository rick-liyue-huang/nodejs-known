    /**
 * Created by rickhuang on 21/3/17.
 */

    /*
    *  package.json is an important file, which stores the node.js app's name, edition, description, author, entrance,
    *  script, licence.
    *
    *  When we initial the npm package, we will initial a new package.json, and also we can dependent the other file which in
    *  stores the "dependencies: ",
    *
    *  semver used deal with dependencies, devDependencies and peerDependencies, for example "co": "^6.6.0".
    *
    *  semver format: main-edition-number.sub-edition-number.edit-number.
    *
    *  Just like we talked about, "main:" is the main entrance file, we can change the file to let the outer file import the different
    *  files.
    *
    * */


    /*
    * 1. Using npm init to initial a blank project is very nice, and it is also a convenient way to layout the node.js project.
    *
    * "npm install" used to install some npm frameworks on dedicated needs.
    * npm i === npm install
    *
    * if we use npm i, it will not write package.json dependencies or devDependencies
    * so we need two more parameters
    * 1> npm i express --save / npm i express -S
    * 2> npm i express --save-dev / npm i express -D
    * 3> npm i express --save --save-exact
    *
    * if we run "npm config set save-exact true", we can directly use code of "npm i xxx ---save"，
    * We also can look through the npm configuration by input "npm config list"
    *
    * 2. npm script
    * npm provides some code
    * "npm start" === "npm run start"
    * "npm test" === "npm run test"
    *
    * 3. npm shrinkwrap
    * in some projects, we need to dependent the exact imported files and ensure that the exacted files can be used in any operation
    * environment. so we need input "npm shrinkwrap", it will produce a npm-shrinkwrap.json file, which includes the modules and responding editions
    * through node_modules calculated. Only if the current directory contains npm-shrinkwrap.json, we can use the shrinkwrap.json file when running
    * "npm install". If has not npm-shrinkwrap.json, it will only use package.json file.
    *
    * */






































