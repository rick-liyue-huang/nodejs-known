
### 模块化 ----
1. 系统模块： http, querystring, url
2. 自定义模块
3. 包管理工具

#### 系统模块 

Crypto 加密,  Events 事件, Net 网络, OS 操作系统, Path 文件路径,
Stream 流操作, Timer 计时器, URL 地址栏, ZLIB 压缩


#### 自定义模块

require 请求： 引入模块
module 模块
exports 可以批量输出

注意： 
1. 引入自己的模块，最好加 ./
2. 对于任何的文件都会加入一个外包
 (function(require, exports, module, __dirname, __filename) {})()

#### 包管理器 npm

1. 统一下载路径
2. 自动下载依赖
3. 如果有 ./ 就从当前找，如果没有，就从系统模块和从 node_modules目录中找
4. 如果重名的话，则先从系统模块找。
5. 因此自定义模块都放到node_modules目录里






















 
