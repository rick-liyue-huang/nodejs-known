	
	// visit http://localhost:3000/ and output CNode(https://cnodejs.org/ ) by json format. 

	/*

	Here we will import superagent and cheerio to make an simple web crawler
	superagent used to catch the webpage and cheerio used to analyze the webpage

	and also focus on the asynchronous tech of nodeJS.

	superagent is a lib about HTTP, and can send 'get' and 'post' request
	cheerio is similar as jQuery but used in NodeJS, which can collect the data by css selector

	*/ 

	"use strict";

	const express = require('express');
	const cheerio = require('cheerio');
	const superagent = require('superagent');

	let app = express();


	app.get('/', (req, res, next) => {

		// to catch the content from https://cnodejs.org by superagent
		superagent.get('https://cnodejs.org/')
			.end((err, sres) => {
				if (err) {
					return next(err);
				}

				/*
					sres.text store the content of webpage and then transfer it to cheerio.load.
					it will get variable stored the jquery interface, we used to name it as $,
					then we can work on the jQuery.
				*/ 

				let $ = cheerio.load(sres.text);
				let items = [];
				$('#topic_list .topic_title').each((idx, element) => {
					let $element = $(element);
					items.push({
						title: $element.attr('title'),
						href: $element.attr('href')
					});
				});
				res.send(items);
			});
	});

	app.listen(3000, () => {
		console.log('app is listening at port 3000');
	});




























