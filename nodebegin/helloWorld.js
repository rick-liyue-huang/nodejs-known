// console.log("Hello World");


// we pass the function say as the first parameter to the execute function. Not the 
// return value of say, but say itself.
// function say(word) {
// 	console.log(word);
// }

// function execute(someFunc, value) {
// 	someFunc(value);
// }

// execute(say, "Hello");

// JS is only one single process, if there is a slow database query somewhere in this process, this affect
// the whole process-- everything comes to a halt until the slow query has finished.

// to avoid this, JS and therefore Node.js, introduce the concept of event-driven, asynchronous callbacks,
// by utilizing an event loop.

database.query("SELECT * FROM hugeTable", function (rows) {
	var resutl = rows;
});
console.log("do not wait the database");

// here instead of expecting database.query() to directly return a result to us, we pass it a second 
// parameter, an anonymous function

request.addListener("data", function(chunk) {
	// called when a new chunk of data was received
});

request.addListener("end", function() {
	// called when all chunks of data have been received.
});



































