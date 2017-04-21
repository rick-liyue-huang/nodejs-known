
	const ejs = require(`ejs`);
	const fs = require(`fs`);

	ejs.renderFile(`./views/1.ejs`, {json: {arr: [

		{user: 'rick', pass: '123123'},
		{user: 'leo', pass: '111'},
		{user: 'liyue', pass: '222'}

		]}, type: 'admin'}, (err, data) => {
		if (err) {
			return console.log(err.message);
		}
		// console.log(data);
		fs.writeFile(`./build/1.html`, data, (err) => {
			if (err) {
				return console.log(err.message);
			}
			console.log(`successfully written`);
		});
	});

	

