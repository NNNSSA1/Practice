#!/usr/bin/env node    //指定node的执行环境


 if(i=dirName ){
     console.log("存在了")
    process.exit(1)  

    else
    
    var fs = require('fs')
    var dirName = process.argv[2] //参数是从第2个开始的，node(0)  demo.js(1)  xxx(2)
 
    fs.mkdirSync(""+dirName) //在当前目录下创建一个参数dirName的文件夹。eg.mkdir $1
    process.chdir(""+dirName )//进入刚创建的ditName文件夹。eg。cd $1
    fs.mkdirSync("css")//创建css文件夹
    fs.mkdirSync("js")//创建js文件夹
    fs.writeFileSync(
        "./index.html",
        "<!DOCTYPE> "+
        "<title>Hello</title>"+
        "<h1>Hi</h1>")//在根目录创建一个HTML并写入代码
    fs.writeFileSync(
        "./css/style.css",
        "h1{color: red;}")//在css目录下创建css文件并写入css代码
    fs.writeFileSync(
        "./js/main.js",
        "var string = hello world "+
        " alert(string)")//在js目录下创建js文件并写入js代码
    process.exit(0)

 }

