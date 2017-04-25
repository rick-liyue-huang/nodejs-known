
	const mysql = require(`mysql`);

	// here mysql is the client end

	// in order to connect with mysql server

	// 1. connect
	let db = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'newpass',
		database: 'testone'
	});

	console.log(db);

	// 2. query, through network, so have callback
	db.query("SELECT * FROM `user_table`;", (err, data) => {
		if (err) {
			return console.log(`wrong, `, err);
		}
		// console.log(`successful`, data);
		console.log(JSON.stringify(data)); // string 
	});
































