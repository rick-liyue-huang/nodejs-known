	
	const exec = require(`child_process`).exec;

	function start() {
		console.log(`Request handler "start" was called.`);

		/*
		function sleep(milliSeconds) {
			let startTime = new Date().getTime();
			while (new Date().getTime() < startTime + milliSeconds);
		}

		sleep(5000);
		return `Hello Start`;
		*/

		exec(`ls -lah`, (error, stdout, stderr) => {
			content = stdout;
		});
		return content;
	}

	function upload() {
		console.log(`Request handler "upload" was called.`);
		return `Hello Upload`;
	}

	module.exports.start = start;
	module.exports.upload = upload;