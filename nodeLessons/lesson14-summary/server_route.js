
	const express = require(`express`);

	let server = express();

	let routeUser = express.Route();

	routeUser.get('/1.html', (req, res) => {
		res.send('user1');
	});

	routeUser.get('/2.html', (req, res) => {
		res.send('user22');
	});

	server.use('/user', routeUser);

	let articleRouter = express.Router();

	server.use('/article', articleRouter);

	articleRouter.get('/1001.html', (req, res) => {
		res.send('article10001');
	});

	server.listen(3000);