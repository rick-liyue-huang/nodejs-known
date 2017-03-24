
"use strict";

const fs = require('fs');
const path = require('path');
const markdown = require('markdown-it')(); // transfer markdown file
const moment = require('moment');
const bs = require('browser-sync').create();


//get template string
const templateStr = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

let filepath = path.join(__dirname, 'README.md');


// when watch one file, the programme will not exit
fs.watchFile(filepath, {
    persistent: true, // default as true, if false will exit at once
    interval: 500
}, (curr, prev) => {
    // console.log('file changed');
    // console.log(`the current file modify time: ${curr.mtime}`);
    // console.log(`the old file modify time: ${prev.mtime}`);


    // only determine the current file states
    if (curr.mtime !== prev.mtime) {

        //when file changed, read .md file content.
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) throw err;


            // by markdown-it framework,
            let htmlStr = markdown.render(data);
            // console.log(htmlStr);

            // let htmlPath = path.dirname(filepath);
            // console.log(htmlPath);

            let pathObj = path.parse(filepath);

            // console.log(pathObj);

            pathObj.base = `${pathObj.name}.html`;

            pathObj.ext = '.html';

            let htmlPath = path.format(pathObj);




            let tmpStr = templateStr.replace('^_time_^', moment().format('YYYY-MM-DD hh:hh:ss'));
            tmpStr = templateStr.replace('^_content_^', htmlStr);


            // console.log(htmlPath);

            fs.writeFile(htmlPath, tmpStr, 'utf8', (err) => {
                if (err) throw err;

                console.log("successful");
            });

        });
    }
});





















