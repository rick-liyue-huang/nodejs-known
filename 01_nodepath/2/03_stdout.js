

"use strict";

// process.stdout is standard output

log('hello');
log('world');

function log (msg) {
	process.stdout.write(msg + '\n');
}



