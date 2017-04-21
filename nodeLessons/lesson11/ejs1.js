
	const ejs = require(`ejs`);

	ejs.renderFile(`./views/1.ejs`, {name: `rick`}, (err, data) => {
		if (err) {
			console.log(`fail`);
		} else {
			console.log(data);
		}

	});