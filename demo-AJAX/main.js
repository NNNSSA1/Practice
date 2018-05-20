window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}
window.jQuery.ajax = function(options){
    let url = options.url
    let method = options.method
    let body = options.body
    let success = function(){}
    let fail = function(){}

    let headers = options.header
    for(let key in headers ){
        value = headers[key]
        request.setRequestHeader(key,value)
    }
    let request = new XMLHttpRequest()
    request.open(method,url)   //配置request
    request.onreadystatechange = function(){
        if(request.readyState === 4 ){
            console.log("请求响应完毕")
            if(request.status >= 200 && request.status < 300 ){
                success.call(undefined,request.responseText)
                // let string = request.responseText
                // let objcet = window.JSON.parse(string)
                // //JSON.parse是浏览器提供的API
                // //把符合JSON语法的字符串转为JS相应的值
                // console.log(objcet)
                console.log("请求成功")
            }else if(request.status >= 400){
                fail.call(undefined,request)
                console.log("请求失败")
            }
        }
    } 
    request.send(body)
}

window.$ = window.jQuery
btn.addEventListener('click',function(e){
    window.jQuery.ajax({
        urt:'/xxx',
        method:'post',
        header:{
            'Content-Type':'x-www-from-urlencoded',
            'songmeng':'23'
        },
        body:'hh',
        success:(responseText)=>{console.log(1)},
        fail:(request)=>{console.log(2)}
    })
})