

const fs = require(`fs`);

// readFile(filename, callback); 
fs.readFile(`../lesson1/aaa.txt`, (err, data) => {
	if (err) {
		throw err;
	}
	console.log(data.toString());
});

fs.writeFile(`./bbb.txt`, `ahdkhakhuh44h`, (err) => {
	if (err) {
		throw err;
	}

});