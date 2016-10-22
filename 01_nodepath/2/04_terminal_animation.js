
// animation in terminal

"use strict";

var frames = [];

frames.push(`
╭~~~╮
(o^.^o)
`);

frames.push(`
╭~~~╮
(o~.~o)
`);
frames.push(`
╭~~~╮
(o@.@o)
`);
frames.push(`
╭ ﹌╮
(o'.'o)
`);

const fps = 10;
var index = 0;

setInterval(() => {

	// clear screen
	process.stdout.write('\u001b[2J\u001b[0;0H');

	process.stdout.write(frames[index]);

	index++;

	if (index >= frames.length) {
		index = 0;
	}

}, 1000/fps);




















