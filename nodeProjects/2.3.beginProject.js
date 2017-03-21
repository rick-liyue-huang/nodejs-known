/**
 * Created by leo on 21/3/17.
 */

 /*
 *  we need to add some directories and files, including:
 *
 *  models: used to store database files
 *  public: used to store static file, for example style and pictures
 *  routes: used to store route file
 *  views: used to store template
 *  index.js: used to store main programme
 *  package.json: used to store project name, description, author, dependencies and so on
 *
 * */

 // npm i config-lite connect-flash connect-mongo ejs express express-formidable express-session marked moment mongolass objectid-to-timestamp sha1 winston express-winston --save

 /*
 * the modules usage:
 *
 * express: web framework
 * express-session: session middleware
 * connect-mongo: store the session in mongodb, combine with expression-sessioin
 * connect-flash: webpage notification middleware, based on the session
 * ejs: template engine
 * express-formidable: receive form or file upload middleware
 * config-lite: read the configure file
 * marked: resolve markdown file
 * moment: format the time
 * mongolass: mongodb driver
 * objectid-to-timestamp: create the timestamp based on ObjectId
 * sha1: sha1 encode
 * winston: log
 * express-winston: express log middleware based on the winston
 *
 * */



 /*
 *  For this blog, we need to know the functions and routes of the blog, including
 *
 *  1. signup
 *    1> signup page: GET /signup
 *    2> signup (including the upload icon): POST /signup
 *  2. signin
 *    1> signin page: GET /signin
 *    2> signin: POST /signin
 *  3.signout
 *    GET /signout
 *  4.check article
 *    1> main page: GET /posts
 *    2> author main page: GET /posts?author=xxx
 *    3> check article (including the comments): GET /posts/:postId
 *  5.post article
 *    1> post article page: GET /posts/create
 *    2> post article: POST /posts
 *  6.edit article
 *    1> edit article page: GET /posts/:postId/edit
 *    2> edit article: POST /posts/:postId/remove
 *  7.comments
 *    1> create comments: POST /posts/:postId/comment
 *    2> remove comments: GET /posts/:postId/comment/:commentId/remove
 *
 *
 *  By the way, our blog is rendered in server end, so we will interact with server end by simple
 *  <a>(GET) and <form>(POST). If we use jQuery or Angular, vue, react, we will interact with server end by
 *  Ajax.
 *
 *
 *
 * */



 /*
 *  Session
 *  Because HTTP protocol is the stateless one, server will need some mechanism to identify the dedicated users, and then
 *  record the users state. This mechanism is session, which is different from cookie.
 *
 *  cookie stored in browsers, and session stored in server.
 *  session realization based on the cookie, and session id stored in cookie
 *
 *  we will import the express-session middleware to support the session.
 *  "app.use(session(options))"
 *
 *  session middleware will add the session object on req, req.session initial value is {}. When we config after signin, req.session.user=user info.
 *  The returned browser header info will contain set-cookie, and session id will write to browser cookie, so when this user request again, we can find
 *  this user through the session id in cookie, and store the user info in the req.session.user.
 *
 * */



 /*
 *  page notification
 *  we also need some notification, for example, when we operate successful, we need a successful notification, when we signin successful, we need a signin successful notification,
 *  when we operate fail, we need a fail notification, if we signup a new username and the username is occupied, it need a occupied notification. The notification only show
 *  once, and will disappear after refresh, we can realize it by connect-flash middleware.
 *
 *  connect-flash is based on session, which has a simple principle: setting initial value req.session.flash={}, and then setting the value by req.flash(name, value),
 *  at last getting the value and delete the name by req.flash(name).
 *
 *  express-session: session support middleware,
 *  connect-mongo: store the session in mongodb, combining with express-session,
 *  connect-flash: based on session to realize the notification middleware, combining with express-session
 * */



 /*
 *   Authority control
 *   In the blog, we should konow that we only can glance at the articles without signin, and can post article and comments only after signin,
 *   whatever you signin or not, you never remove other's article
 *
 * */











































