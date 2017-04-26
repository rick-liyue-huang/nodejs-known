

  #### This is another blog project

  we can get much more than the project2


 Steps:

 1. 数据字典
 2.后台接口，静态资源
 3.angular

 -----------------------------------------------

 1. 数据字典  

 	定义 url  300 字


 	管理员表

 	ID
 	username
 	password


	
	1.首页
 	banner, banner_table

 	ID
 	title   varchar(32)
 	description  varchar(300)
 	href  varchar(300)    


------------------
 	产品介绍表, intro_table

	ID 
	title varchar(32)
	description varchar(200)
	href   varchar(300)


----------------------------
 	用户评价, custom_evaluation_table 

 	ID
 	title varchar(32)
 	description varchar(200)
 	src varchar(300)

 	---------------------------
	2. 技术


 	新闻，    news_table
 	ID
 	title varchar(100)
 	summary varchar(500)
	icon_src varchar(300)
	big_pic_src varchar(300)
	content text 

 	----------------------------

 	
 	3. blog    blog_table
	
	ID
	title varchar(100)
	pic_src  varchar(300)
	pic_big_src varchar(300)
	summary varchar(500)
	content text
	post_time timestamp
	author  varchar(32)
	n_view  int

 	---------------------
 	4. 联系
 	地址，地图    contact_table

	ID
	street  varchar(100)
	phone   varchar(20)
	fax     varchar(20)
	email   varchar(32)
	weibo   varchar(50)
	weixin  varchar(50)
	map  


------------------------------------

 	发送联系消息  msg_table
	
	ID
	name   varchar(30)
	email  varchar(64)
	phone  varchar(30)
	subject text

----------------------------------------

 	5. 关于我们  aboutus_table

	ID
	title  varchar(200)
	content text
	pic_src varchar(300)
	href varchar(300)



	--------------------------------------------------

	route:  

	普通用户-前台部分
	管理员用户 --- 后台管理部分

	route ：   小型 的 express



	注意： 为了防止数据库被偷走  拖库

		在数据库里面不能存储明文密码
		密码需要加密后在存储

		MD5 -- 签名算法

		
































