var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/













  console.log('HTTP路径为\n' + path)
  if(path == '/'){
    response.setHeader('Content-Type','text/html; charset=utf-8') //响应第二部分声明类型和字符集
    response.write('<!DOCTYPE>\n<html>'+
      '<head><link rel = "stylesheet" href="/style.css">'+
      '</head><body>'+
      '<h1>你好</h1>'+
      '<script src="/main.js"></scrpit>'+
      '</body></html>')
    response.end()//结尾非常重要，否则会一直等待！
  }else if(path =='/style.css'){
    response.setHeader('Content-Type','text/css; charset=utf-8')
    response.write('body{background-color: #ddd;}h1{color:red;}')//输出css的内容
    response.end() 
  }else if(path =='/main.js'){
    response.setHeader('Content-Type','text/javascript; charset=utf-8')
    response.write('alert("我是js内容")')//输出js的内容
    response.end()
  }else{
    response.statusCode = 404 //当访问其他的网页地址时候响应404
    response.end()
  }




  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


