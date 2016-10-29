// 功能   要实现IE低版本里面适配getClass
function getClass(classname,obj){
	obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}
		else{			
			var objs=obj.getElementsByTagName("*");
			var arr=[];
			for(i=0;i<objs.length;i++){
                if (getmoreClass(classname,objs[i])){ 
				     arr.push(objs[i])
			   }
			}
			return arr;
		}
		
	}

 function getmoreClass(classname,obj){
 	var classStr=obj.className;
 	var classArr=classStr.split(" ");
 	for(var i=0;i<classArr.length;i++){
 		if(classArr[i]==classname){
 			return true;
 		}
 		return false;
 	}
 }




function $(val,obj){
    if(typeof val=="string"){
        var obj=obj||document;
    val=val.replace(/^\s*|\s*$/g,"");
    if(val.charAt(0)=="#"){
        return document.getElementById(val.slice(1));
        }else if(val.charAt(0)=="."){
            return getClass(val.slice(1),obj);
        }else if(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/.test(val)){
            return obj.getElementsByTagName(val)    
      }
    }else if(typeof val=="function"){
        window.onload=function(){
            val();
        }
    }
	
}




// 实现 currentStyle在ff不兼容
function getStyle(obj,style){
	//ie支持
	if(obj.currentStyle){
		return obj.currentStyle[style];
		// ff支持
	}else if(getComputedStyle(obj,null)){
		return getComputedStyle(obj,null)[style]
	}
}



// 实现IE不支持textContent
function getText(obj,val){
	if (val!=undefined) {
      if(obj.textContent){
		  return obj.textContent=val;
	    }else{
		    return obj.innerText=val;
	    }  
	}else{
	if(obj.textContent){
		return obj.textContent;
	}else{
		return obj.innerText;
	}
}
}


function getChilds(obj,type){
   var type=type||"no"
   var kids=obj.childNodes;
   var arr=[];
   for(var i=0;i<kids.length;i++){
   	if(type=="no"){
   		if(kids[i].nodeType=="1"){
   			arr.push(kids[i]);
   		}
   	}else if(type=="yes"){
   		if(kids[i].nodeType=="1"||kids[i].nodeType=="3"&&kids[i].nodeValue.replace(/^\s*|\*$/g,"")){
   			arr.push(kids[i]);
   		}
   	}
   }
   return arr;	
}



 function getFirst(obj,type){
	var type=type||"no";
	return getChilds(obj,type)[0];
}

function getLast(obj,type){
	var type=type||"no";
  var childs=getChilds(obj,type);	
	var index=childs.length;
	return childs[index-1]
}
 function getN(obj,n,type){
 	var type=type||"no";
  var childs=getChilds(obj,type)[0];
  if(n>childs.length||n<1){
    return false;
  }
		return childs[n-1];
 }

// 获取下一个兄弟节点
function getNext(obj,type){
	var type=type||"no"
	var next=obj.nextSibling;
	if(type==null){
		return false;
	}
	if(type=="no"){
        while(next.nodeType=='3'||next.nodeType=='8'){
        	next=next.nextSibling;
        	if(next=null){
        		return false;
        	}
        } 
        return next
	}else if(type=="yes"){
  	     while(next.nodeType=='3'&&next.nodeValue.replace(/^\s*\s*$/g,"")||next.nodeType=='8'){
        	next=next.nextSibling;
        	if(next==null){
        		return false;
        	}
        } 
        return next

  	}
}
// 获取上一个兄弟节点
function getPrevious(obj,type){
	var type=type||"no"
	var previous=obj.previousSibling;
	if(type==null){
		return false;
	}
	if(type=="no"){
        while(previous.nodeType=="3"||previous.nodeType=="8"){
        	previous=previous.previousSibling;
        	if(previous==null){
        		return false;
        	}
        } 
        return previous
	}else if(type=="yes"){
  	     while(previous.nodeType==3&&previous.nodeValue.replace(/^\s*|\s*$/g,"")||previous.nodeType==8){
        	previous=previous.previousSibling;
        	if(previous==null){
        		return false;
        	}
        } 
        return previous

  	}
}

// 插入到某个对象之前
function insertBefore(obj,beforeobj){
     //var parent=beforeobj.parentNode;
     //parent.insertBefore(obj,beforeobj)
     var obj=obj;
     var fu=beforeobj.parentNode;
     fu.insertBefore(obj,beforeobj)   
}
// 插入到某个对象之后
function insertAfter(obj,afterobj){
   var parent=afterobj.parentNode;
   // 要文本选yes，获取下一个兄弟节点
   var next=getNext(afterobj,"yes")
   // 此处的!next=next==false
   if(!next){
   	 parent.appendChild(obj);
   }else{
   	 parent.insertBefore(obj,next);
   }
                                                                                                       
}

function addEvent(obj,event,fun){
  if(obj.attachEvent){
    obj.attachEvent('on'+event,fun)
  }else{
    obj.addEventListener(event,fun,false)
  }
}

function delEvent(obj,event,fun){
  if(obj.detachEvent){
    obj.detachEvent('on'+event,fun)
  }else{
    obj.removeEventListener(event,fun,false)
  }
}

function mouseWheel(obj,down,up){
  if(obj.attachEvent){
    obj.attachEvent('onmousewheel',scrollFun)
  }else{
    obj.addEventListener('mousewheel',scrollFun,false)
    obj.addEventListener('DOMMousewheel',scrollFun,false)
  }
  function scrollFun(e){
    var e=e||window.event;
    if(e.parentDefault){
      e.parentDefault
    }else{
      e.returnValue=false;
    }
    var nub=e.wheelDelta||e.detail;
    if(nub==120||nub==-3){
  //改变this指针，指向obj
       up.call(obj);
    }else if(nub==-120||nub==3){
      down.call(obj)
    }
  }
}

//15.hover
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
  if(parent.contains){
    return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
  if(getEvent(e).type=="mouseover"){
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
  }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
  }
}
//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
  if(overfun){
    obj.onmouseover=function  (e) {
      if(checkHover(e,obj)){
        overfun.call(obj,[e]);
      }
    }
  }
  if(outfun){
    obj.onmouseout=function  (e) {
      if(checkHover(e,obj)){
        outfun.call(obj,[e]);
      }
    }
  }
}
function getEvent (e) {
  return e||window.event;
}

//设置cookies
function setCookie(attr,value,time){
	if(time==undefined){
		document.cookie=attr+"="+value;	
	}else{
		var now=new Date();
		now.setTime(now.getTime()+time*1000)
		document.cookie=attr+"="+value+";expires="+now.toGMTString();
	}
}

function getCookie(val){
	var str=document.cookie;
	var arr=str.split("; ");
	for(var i=0;i<arr.length;i++){
		var arrValue=arr[i].split("=");
		if(val==arrValue[0]){
			return arrValue[1];
		}
	}
	return false;
}

function delCookie(attr){
	var now=new Date;
	now.setTime(noe.getTime()-1);
	document.cookie=attr+"=aklsad;expires="
}
