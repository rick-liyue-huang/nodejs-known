

server 
client
navicat 管理工具
node.js 写程序

数据的相关概念

两种单位： 

1. 库： 文件夹 --- 用来管理数据，本身是没法存数据的
2. 表： 文件 --- 用来存储数据


表 类似于 Excel

行 --- 一条数据 
列 --- 字段， 域， 代表的某一项数据

主键 --- 唯一的标识符
两个特点： 唯一的， 它的性能更高

sql === structure query language


标准字大写： 
1.关键字大写 
2. 库，表，字段名字都需要加上反单引号``

四大查询语句： ---- 增删改查



增 --- insert 

INSERT INTO 表(字段列表) VALUES(值列表)
INSERT INTO user_table(`ID`, `username`, `password`) VALUES(0, 'rick2', '654321');



删 --- delete

改 --- upadate

查 --- select 

SELECT XXX FROM 表

SELECT * FROM `user_table`;






















