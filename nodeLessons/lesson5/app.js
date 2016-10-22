

	/*
	the same as the last lesson, but use the another module to deal with simultaneously conrtrol
	the entrance is app.js 
	when call the node app.js, it will output the cnode's mainpage content, including the title, href and comment1

	here we will use async module to deal the simultaneously conrtrol, but focus on the number of simultaneously conrtrol.

	the conclusion is that : when we need to catch less than 10 datasources, we will use eventproxy, otherwise we will
	set the simultaneously conrtrol number by 'mapLimit' and 'queue' method

	
	*/ 