if [ -d $1 ]; then
	echo "存在了"
	exit 1
else
     mkdir $1
     cd $1
     mkdir css js    
	echo "<!DOCTYPE>
        <title>Hello</title>
        <h1>Hi</h1>"> index.html
	echo "h1{color: red;}"> css/style.css
	echo "var string = "Hello World"
        alert(string)"> js/main.js
	echo "成功"
	exit 0
fi