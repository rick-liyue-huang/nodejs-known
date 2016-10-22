

"use strict";

// process.kill can end a process by its pid (process id)

var args =process.argv.slice(2);

var pid = args[0];

process.kill(pid);

// for example, 
// node 02_kill.js 524 will kill chrome with pid of 524

