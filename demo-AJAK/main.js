btn.addEventListener('click',function(e){
    let request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(request.readyState ===4 ){
            console.log("请求响应完毕")
            if(request.status >= 200 && request.status < 300 ){
                let string = request.responseText
                let objcet = window.JSON.parse(string)
                //JSON.parse是浏览器提供的API
                //把符合JSON语法的字符串转为JS相应的值
                console.log(objcet)
                console.log("请求成功")
            }else if(request.status >= 400){
                console.log("请求失败")
            }
        }
    }  
    request.open('post','/xxx')   //配置request
 
    request.send()

})