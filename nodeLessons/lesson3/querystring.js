

const querystring = require(`querystring`);

let json = querystring.parse(`user=blue&pass=1223&age=191`);
console.log(json);