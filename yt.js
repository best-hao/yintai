window.onload=function(){
	var box=getClass('box5-center')[0]
	var img=getClass('img')
    var yuan=getClass('tx-n');
    var left=getClass('tz')[0];
    var right=getClass('ty')[0];
    var t=setInterval(lun,3000)
    var now=0;
	function lun(){
       now++
       if(now>=img.length){
                now=0}
       for(var i=0;i<img.length;i++){
       	animate(img[i],{opacity:0},300);
       	yuan[i].style.background="#000";
       }
        animate(img[now],{opacity:1},300);
        yuan[now].style.background="#E5004F";
	}
    box.onmouseover=function(){
        clearInterval(t)
        left.style.display="block";
        right.style.display="block";
    }
     box.onmouseout=function(){
        t=setInterval(lun,3000)
        left.style.display="none";
        right.style.display="none";
    }
   left.onclick=function(){
        now--
       if(now<0){
         now=img.length-1}
       for(var i=0;i<img.length;i++){
       	animate(img[i],{opacity:0},300);
       	yuan[i].style.background="#000";
       }
        animate(img[now],{opacity:1},300);
        yuan[now].style.background="#E5004F";
    }
    right.onclick=function(){
        lun()
   }
   for(var i=0;i<yuan.length;i++){
   	 yuan[i].chang=i;
   	 yuan[i].onclick=function(){
   	  for(var j=0;j<img.length;j++){
       animate(img[j],{opacity:0},300);
        yuan[j].style.background="#000";
   	 	}
      yuan[this.chang].style.background="#E5004F";
   	  animate(img[this.chang],{opacity:1},300);
   	 }	  
   }
   // var boxsix=getClass('box6-bt')
   // console.log(boxsix.length)
   // for(var i=0;i<boxsix.length;i++){
   //  boxsix[i].now=i;
   //  boxsix[i].onmouseover=function(){
   //   for(var j=0;j<boxsix.length;i++){
   //     boxsix[j].style.borderColor="#ccc"
   //  }
   //     boxsix[this.now].style.borderColor="red"
   //  }
   // }
   var banneryou=getClass('box5-right')[0];
   banneryou.onmouseover=function(){
    animate(banneryou,{right:10},300)
   }
   banneryou.onmouseout=function(){
    animate(banneryou,{right:0},300)
   }
// var boxzi=getClass('box5-zi')
// for(var i=0;i<boxzi.length;i++){
//  boxzi[i].now=i;
//  boxzi[i].onmouseover=function(){
//     for(var j=0;j<boxzi.length;j++){
//      boxzi[j].style.background="#333333"
//     }
//     boxzi[this.now].style.background="#E5004F"
//  }
// }


   function xiaolunbo(n){
   var n=n;
   var baleft=getClass('baleft')[n];
   var baright=getClass('baright')[n];
   var ba=getClass('box8-yw')[n]
   var banei=getClass('box8nei',ba)
   var next=0;
   var first=0;
   baright.onclick=function(){
      next=first+1;
      if(next>=banei.length){
        next=0;
      }
      banei[next].style.left=200+"px";
      animate(banei[first],{left:-200},500);
      animate(banei[next],{left:0},500);
      first=next
   }
   baleft.onclick=function(){
      next=first-1;
      if(next<0){
        next=banei.length-1;
      }
      banei[next].style.left=-200+"px";
      animate(banei[first],{left:200},500);
      animate(banei[next],{left:0},500);
      first=next;
    }
   }
   var eight=getClass('box8-yw');
   for(var k=0;k<eight.length;k++){
    xiaolunbo(k);
   }


   function dalunbo(now,n){
   var now=now;
   var bazuo=getClass('box8-zuo')[now];
   var bayou=getClass('box8-you')[now];
   var dianwai=getClass('box8-dian')[now];
   var diannei=getClass('dian',dianwai);
   var bacenter=getClass('box8-center')[n];
   var baimg=getClass('imgxiao',bacenter)
   var flog=true;
   function zuo(){
        animate(baimg[0],{left:-390},500)
        animate(baimg[1],{left:0},500)
        diannei[0].style.background="#ccc";
        diannei[1].style.background="#E4145A";
   }
   function you(){
      animate(baimg[0],{left:0},500)
      animate(baimg[1],{left:390},500)
      diannei[1].style.background="#ccc";
      diannei[0].style.background="#E4145A";
   }
   bayou.onclick=function(){
      if(flog==true){
        zuo();
      }
      flog=false;  
   }
   bazuo.onclick=function(){
      if(flog==false){ 
      you();
      }
      flog=true; 
   }
   diannei[0].onclick=function(){
      you()
   }
   diannei[1].onclick=function(){
      zuo()
   }
   bacenter.onmouseover=function(){
      bazuo.style.display="block"
      bayou.style.display="block"
   }
   bacenter.onmouseout=function(){
      bazuo.style.display="none"
      bayou.style.display="none"
   }
   bazuo.onmouseover=function(){
      bazuo.style.background="#E4145A"
   }
   bazuo.onmouseout=function(){
      bazuo.style.background="rgba(6,6,6,0.3)"
   }
   bayou.onmouseover=function(){
      bayou.style.background="#E4145A"
   }
   bayou.onmouseout=function(){
      bayou.style.background="rgba(6,6,6,0.3)"
   }
   }
   dalunbo(0,0)
   dalunbo(1,3)
   dalunbo(2,4)
   dalunbo(3,5)
   dalunbo(4,6)
   dalunbo(5,7)

    var daoh=$('.daoh')[0];
    var daohang=$('.daohang')[0];
    var lou=$('.box7-top');

    var no;
    var nav=$('.nav');
    var navtu=$('.navtu');
    var pg=document.documentElement.clientHeight;
    window.onscroll=function(){
      var obj=document.body.scrollTop?document.body:document.documentElement;
      var over=obj.scrollTop;
      var top=lou[0].offsetTop;
       if(over>top-200){
         daoh.style.display="block";
        }
       if(over<top-200){
         daoh.style.display="none";
        }
         for(var i=0;i<navtu.length;i++){
           navtu[i].index=i;
           lou[i].h=lou[i].offsetTop;
           navtu[i].onclick=function(){
           animate(document.body,{scrollTop:lou[this.index+1].h})
           // animate(document.documentElement,{scrollTop:lou[this.index+1].h})
           now=this.index;
          }
         navtu[i].onmouseover=function(){
          for(var j=0;j<navtu.length;j++){
            animate(navtu[j],{opacity:0},200);
          }
         animate(navtu[this.index],{opacity:1},200)
         }
          navtu[i].onmouseout=function(){
          for(var j=0;j<navtu.length;j++){
            animate(navtu[j],{opacity:0},200);
          }
          }

        }
     }

 function xiala(x,y){
  var one=$('.one')[x]
  var xiala=$('.xiala')[y]
     hover(one,function(){
      xiala.style.display='block'
     },function(){
      xiala.style.display='none'
     })
 }
  xiala(1,0)
  xiala(2,1)
  xiala(7,2)
 
 function youlk(n){
 	var bzi=$('.box5-zi')[n];
	var ylk=$('.ylk')[n];
	hover(bzi,function(){
	 	ylk.style.display="block";
	 	bzi.style.background="#E5004F"
	},function(){
	 	ylk.style.display="none"
	    bzi.style.background="#333333"
	})
 }
 var ylk=$('.ylk');
 for(var i=0;i<ylk.length;i++){
 	youlk(i)
 }
 
 var topzi=$('.top-zi')
 var topzixia=$('.topzixia')
 var jiao=$('.sanjiao')
 var boxsixbottom=$('.box6-bottom')
 for(var i=0;i<topzi.length;i++){
 	topzi[i].now=i;
 	topzi[i].onmouseover=function(){
 	for(var j=0;j<topzi.length;j++){
 	 topzixia[j].style.background="#000"
 	 boxsixbottom[j].style.display="none"
   jiao[j].style.display="none"
 	  }
 	 topzixia[this.now].style.background="#F92975"
 	 boxsixbottom[this.now].style.display="block"
   jiao[this.now].style.display="block"
 	}	
 }
 
 function bian(obj,n){
   var obj=obj
 	 var boxsixbt=getClass(obj)[n]
   var h=boxsixbt.offsetHeight;
   var w=boxsixbt.offsetWidth;
	 var bianzuo=getClass('bianzuo',boxsixbt)[0]
	 var bianyou=getClass('bianyou',boxsixbt)[0]
	 var bianshang=getClass('bianshang',boxsixbt)[0]
	 var bianxia=getClass('bianxia',boxsixbt)[0]
	 hover(boxsixbt,function(){
	 	animate(bianzuo,{top:0},300)
	 	animate(bianyou,{top:0},300)
	 	animate(bianshang,{left:0},300)
	 	animate(bianxia,{left:0},300)
	 },function(){
	 	animate(bianzuo,{top:-h},300)
	 	animate(bianyou,{top:h},300)
	 	animate(bianshang,{left:-w},300)
	 	animate(bianxia,{left:w},300)
	 })
 }
    var boxsixbt=$('.box6-bt')
     for(var i=0;i<boxsixbt.length;i++){
		bian("box6-bt",i)
	}
  
  var remen=$('#remen')
  var tuijian=$('#tuijian')
  var qixia=$('.box7-xia')
  hover(remen,function(){
    qixia[0].style.display="block"
    qixia[1].style.display="none"
  },function(){})
  hover(tuijian,function(){
    qixia[0].style.display="none"
    qixia[1].style.display="block"
  },function(){})

  
}   
     