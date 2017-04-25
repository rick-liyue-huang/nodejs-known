
数据字典 --- 数据定出来


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
