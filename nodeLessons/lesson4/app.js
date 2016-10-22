

//  simultaneously conrtrol by 'eventproxy' module

/*
	the entrance is app.js, it will output the title, href and comment on the cnode webpage by json format

	here we will focus the nodejs callback func, and know how to use eventproxy module


*/

	"use strict";

	const eventproxy = require('eventproxy');
	const superagent = require('superagent');
	const cheerio = require('cheerio');

	//  url is the standard lib of nodejs
	const url = require('url');

	const cnodeUrl = 'https://cnodejs.org/';


	superagent.get(cnodeUrl)
		.end((err, res) => {
			if (err) {
				return console.error(err);
			}

			let topicUrls = [];
			let $ = cheerio.load(res.text);

			// get the all urls on the main page
			$('#topic_list .topic_title').each((idx, element) => {
				let $element = $(element);

				/*
					$element.attr('href') will get /topic/542acd7d5d28233425538b04,
					now we use url.resolve to get the complete url
					so will become https://cnodejs.org/topic/542acd7d5d28233425538b04,
					the details is shown in http://nodejs.org/api/url.html#url_url_resolve_from_to sample 
				*/ 
				let href = url.resolve(cnodeUrl, $element.attr('href'));
				topicUrls.push(href);
			});

			// console.log(topicUrls);

			//  after get the topicUrls

// we will deal with the eventproxy instance
	
	var ep = new eventproxy();

	// ask ep repeatedly listen 'topicUrls.length' times (means 40 times), and then 'topic_html' event begins

	ep.after('topic_html', topicUrls.length, (topics) => {

		// topics is a array, contains 40 times ep.emit('topic_html', pair)

		// start
		topics = topics.map((topicPair) => {

			// the jQuery usage
			let topicUrl = topicPair[0];
			let topicHtml = topicPair[1];

			let $ = cheerio.load(topicHtml);
			return ({
				title: $('.topic_full_title').text().trim(),
				href: topicUrl,
				comment1: $('.reply_content').eq(0).text().trim()
			});
		});
		console.log('final:');
		console.log(topics);
	});



	topicUrls.forEach((topicUrl) => {
		superagent.get(topicUrl)
			.end((err, res) => {
				console.log('fetch ' + topicUrl + ' successful');
				ep.emit('topic_html', [topicUrl, res.text]);
			});
	});

		});



























