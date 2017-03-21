/**
 * Created by leo on 21/3/17.
 */

 /*
 *  For all projects, separating the config from code is nice way. Usually we write the configuration
 *  in the config file, such as config.js or config.json, and put it under the root directory.
 *  We have many different environments, such as local development environment, test environment or online environment.
 *  Different environments have different configuration, and we cannot frequently change config.test.js or config.production.js.
 *  So we use config-lite module
 *
 *  config-lite is one lightweight module reading config files. config-lite can load the different config files under config directory based
 *  on the environment variables (NODE_ENV). If we do not set the NODE_ENV, it will read default config file. If we set the NODE_ENV, it will combine
 *  the designated file and default config file, read the combined file, config-lite support .js, .json, .node, .yml, .yaml files
 *
 *  If programme starts with NODE_ENV = test node app, require('config-lite') will search config/test.js, config/test.json, config/test.node,
 *  config/test.yml, and then combine default config. If the programme starts with NODE_ENV = production node app, it will search config/production.js,
 *  config/production.json, config/production.node, config/production.yml, config/production.yaml, and then combine the default config file.
 * */

 // ---- Step six ----

   module.exports = {
       port: 3000,
       session: {
           secret: 'nodeblog',
           key: 'nodeblog',
           maxAge: 2592000000
       },
       mongodb: 'mongodb://localhost:/27017/nodeblog'
   };

    /*
    * port: the programme listen port number
    * session: express-session config info
    * mongodb: mongodb address, "nodeblog" is the db name
    * */









































