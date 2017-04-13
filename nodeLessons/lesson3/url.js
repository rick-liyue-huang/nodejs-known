
const urlLib = require(`url`);

let obj = urlLib.parse(`http://localhost:6688/?username=ashjks&pass=124`, true);
console.log(obj);