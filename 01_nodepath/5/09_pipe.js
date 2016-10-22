
"use strict";

const fs = require('fs');
const path = require('path');

let sourcePath = 'D:/Softwares/OS/ubuntu-15.04-desktop-amd64.iso';
let distPath = 'C:/Users/iroc/Desktop/ubuntu-15.04-desktop-amd64.iso';

let readStream = fs.createReadStream(sourcePath);
let writeStream = fs.createWriteStream(distPath);

readStream.pipe(writeStream);