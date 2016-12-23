// 引入 path内置模块
var path = require('path');
// 引入 express 依赖模块，用来启动静态服务器
var express = require('express');

// 实例 express
var app = express();

// 指定访问 页面 的路径
var viewsPath = path.join(__dirname,'views');
app.use('/',express.static(viewsPath));

var publicPath = path.join(__dirname,'static');
app.use('/static',express.static(publicPath));

// 监听端口 9999，用来启动
app.listen(16950,function(){
	console.log("server run at port 16950");
});

// 模块导出
module.exports = app;