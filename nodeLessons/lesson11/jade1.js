
	const jade = require(`jade`);
	const fs = require(`fs`);

	let str = jade.renderFile('./views/1.jade', {pretty: true});
	// console.log(str);

	fs.writeFile(`./build/jade1.html`, str, (err) => {
		if (err) {
			return console.log(`wrong write`);
		}
		console.log(`successfully write`);
	});