window.jQuery = function(nodesOrSelecotor){
    let nodes = {}   											 //建立一个空哈希
    if (typeof nodesAndSelecotor === 'string') {     			//判断传入的参数的属性是否是字符串如果是一个字符串
    	let temp = document.querySelectorAll(nodesOrSelecotor)// 建立一个临时变量 通过DOM获取操作获取全部的节点 "得到的是一个伪数组"
    	for(let i=0;i<temp.length;i++){      				//遍历这个临时变量，将得到的节点传入到建立的空数组里面
    		nodes[i] = temp[i]
		}
		nodes.length = temp.length							//将临时变量的长度传给nodes
    	}else if (nodesOrSelecotor instanceof Node) {		//如果传入的内容是节点
    		node = {	
				0:nodeOrSelector,length: 1					//建立一个length为1的伪数组
    		}												//给哈希添加两个新的属性，一个是addClass，另外一个是setText
    	nodes.addClass = function(classes){				
    		classes.forEach((value)=>{					//addClass需要传入一个数组内容，然后遍历这个数组内容的值
    			for(let i = 0;i<nodes.length;i++){		
    				nodes[i].classList.add(value)		//将遍历得到的值，用DOM的classList方法把值添加到nodes这个哈希里面的每个节点上
    			}
    		})
    	}
    	nodes.setText = function(text){					//setText需要传入一个文本内容，然后遍历，将内容替换到每个节点之中
    		for(let i = 0;i<node.length;i++){
    			node[i].textContent = text 
    		}
    	}
    }
    return nodes
}
window.$ = jQuery
$div = $('ul>li')									//传入的nodeOrSelecotro
$div.addClass(['blue'])								//传入的classes
$div.setText('hi')									//传入的text