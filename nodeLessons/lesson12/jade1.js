
	const jade = require(`jade`);
	const fs = require(`fs`);

	let str = jade.renderFile(`./views/2.jade`, {pretty: true, name: 'rick', a: 23, b: 12,
		json: {width: '200pcx', height: '200px', 'background-color': 'yellow'},
		arr: 'aaa left-wrap active', arr1: ['aaa', 'bbb', 'ccc', 'ddd'],
		content: '<h1>dshdkjd</h1><p>dsdhdjkh</p>'});

	fs.writeFile(`./build/1.html`, str, (err) => {
		if (err) {
			return console.log(err.message);
		}
		console.log(`successful`);
	});

	console.log(str);