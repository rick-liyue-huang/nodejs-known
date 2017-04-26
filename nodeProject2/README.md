
This is just the simple project --- 
here it shows how to use 'express' and 'mysql', 'ejs' to complete a blog project.
and know about how to render the page in back-end and how to create a server to provide the data to front-end.


1.banner  (banner_table)
    ID 
    title   varchar(32)
    sub_title varchar(16)
    src  图片地址 varchar(64)

2. article  (article_table)
    
    ID 
    author   varchar(16)
    author_src 作者头像 varchar(64)
    title  varchar(32)
    post_time 发布时间（s） int 
    content    text 
    n_like  赞() int 

3. 用户  (user_table)
    
    ID     
    username   varchar(32) 
    password   varchar(32)
    src   头像地址  varchar(64)



    UPDATE article_table SET n_like=n_like+1 WHERE ID=
























