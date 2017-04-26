
	const express = require('express');

	module.exports = function() {

		let router = express.Router();

		router.get('/', (req, res) => {
			res.send('it is web');
		});


		return router;
	};