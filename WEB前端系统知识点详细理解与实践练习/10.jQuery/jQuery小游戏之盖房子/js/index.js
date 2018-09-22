function addLine(father,index,length) {//添加一行操作
    console.log('addLine函数执行了');
    var ul=$("<ul/>");

    father.append(ul);
    for (var i=0;i<length;i++){
        var li=$("<li/>");
        ul.append(li);

    }
    //每次点击重新设置Ul的bottom值；
    ul.css({
        bottom:index*$("li").height()//不断累加bottom值使砖块向上叠加摞起来；
    });
    move(ul,father);

}
//通过下面的递归方式来让对象自动调用函数本身不断执行
function move(tag,father) {
    tag.animate({
        left:father.width()-tag.width()
    },1000,function () {
        tag.animate({
            left:0
        },1000,function () {
            move(tag,father);//重新调用自身函数执行；
        });
    });

}

//下面这里面的current本身就是ul对象；
//children();取得一个包含匹配元素的所有子元素的集合；
function remove(before,current) {
    var before_left=before.position().left;
    var current_left=current.position().left;
    var difference=current_left-before_left;
    var direction_left=true;//默认方向是左边得砖块；
        var value=Math.abs(difference);
        var num=parseInt(value/10);
        if (difference>0){
            direction_left=false;
           // removeAnimate(current,num,'left');
    }/*else {
        removeAnimate(current,num,'right');
    }
    return num;*/

    //移除动画
   /* function removeAnimate(father,num,direction) {
        var lis=$(father.children());
        if(direction===left){
            var i=0;
            var timer=setInterval(function () {
                $(lis[i]).animate({
                    top:'30px',
                    opacity:0.4
                },400,function (argument) {
                    this.remove();
                });
                i++;
                if (i>=num){
                    clearInterval(timer);
                }
            },100);
        }else {
            var k=0;
            var n=lis.length-1;
            var timer2=setInterval(function () {
                $(lis[n]).animate({
                    top:30,
                    opacity:0
                },200,function (argument) {
                    this.remove();
                });
                k++;
                n--;
                if (k>=num){
                    clearInterval(timer2);
                }
            },100);
        }
    }*/



    //Math.abs();取得是括号里值得绝对值；

    //console.log(before_left);
   // console.log(current_left);
    //console.log(num);
    var removeIndex=0;
    for (var i=0;i<num;i++){
        var li=current.children()[i];//从数组中取出第i个li标签；
        //console.log(current.length);
        //console.log(i);
        $(li).remove();
        if(direction_left){//判断方向后再改变left样式；
            current.css({
                left:current.position().left+10
            });
        }
        i--;

        //判断移除了多少次与num的关系，如果相等了，就让i--相关的一系列循环都停止；
        removeIndex++;
        if(removeIndex===num){
            break;
        }

    }
}

