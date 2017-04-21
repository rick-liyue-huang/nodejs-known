
	模板引擎： 用来渲染页面的，就是渲染里面的动态数据

	两种 主流模板引擎： jade 和 ejs

	jade: 是一种破坏性的引擎，如果使用这种 就不能使用 html css
	ejs: 非侵入式的，若依赖的，

	jade: 属性 用括号

	<script src="a.js"></script>

	script(src="a.js");


	只有是style 属性的时候可以使用json 方式
	div(style="width:200px;height:300px;background:red")
	div(style= {width: `200px`, height: `200px`, 'background-color': `yellow`})

	div(class="aaa left-wrap active")
	也许可以使用 数组

	但是也有一些简便的写法

	div.box
	div#div1
	div&attributes({title: `aaa`, id: `div2`})



	jade: 内容 空格

	<a href="http://www.google.com/">content</a>
	a content


	注意：

	1. 根据缩进来划分层级
	2. 属性可以使用() 用逗号分开
		style = {}
		class = []

	3. 也可以使用一些渐变写法

	4. jade.render(str)
		jade.renderFile(filename, {参数})

	


























