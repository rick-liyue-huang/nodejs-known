/*
* 需求： 动态的将一个md文件转换为HTML 文件
* */

"use strict";
const fs = require('fs');

const md = require('node-markdown').Markdown;

// 第一步， 读取原来的.md文件，得到其中的内容
fs.readFile('../../README.md', (err, data) => {
    if (err) {
        throw new Error('wrong one');
    }

    //得到该内容后，将内容转化为HTML 字符串
    // console.log(data.toString());
    var html = md(data.toString(), true);
    // console.log(html);

//    将 HTML 字符串保存在一个文件中
    fs.writeFile('./README.html', html, (err, data) => {
        if (err) {
            throw err;
        }
        console.log('transfer successful');


        //module的加载路径规则
        console.log(module.paths);

        /*
        * [ '/Users/rickhuang/Documents/git source/nodejs-known/04_md_transfer/lib/node_modules',
         '/Users/rickhuang/Documents/git source/nodejs-known/04_md_transfer/node_modules',
         '/Users/rickhuang/Documents/git source/nodejs-known/node_modules',
         '/Users/rickhuang/Documents/git source/node_modules',
         '/Users/rickhuang/Documents/node_modules',
         '/Users/rickhuang/node_modules',
         '/Users/node_modules',
         '/node_modules' ]
        * */
    });
});