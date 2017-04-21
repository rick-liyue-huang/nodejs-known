
	const jade = require(`jade`);
	const fs = require(`fs`);

	let str = jade.renderFile(`./views/index.jade`, {pretty: true});

	fs.writeFile(`./build/index.html`, str, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log(`successfully written`);
	});