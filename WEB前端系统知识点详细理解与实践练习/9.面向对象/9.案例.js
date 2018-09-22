//让块移动封装函数；
function move(obj) {
    //获取计算后样式来获得四个方向的当前值；
    var current=getComputedStyle(obj.tag)[obj.direction];
    //得到的是有px 的值,通过正则将px 去掉
    var reg=/px/g;
    var current_value=Number(current.replace(reg,''));
    var end=Number(obj.end.replace(reg,''));
    //
    var offValue=1;
    if(current_value>end){
        offValue=-1;
    }
    var timer=setInterval(function () {
        current_value+=offValue;
        obj.tag.style[obj.direction]=current_value+'px';
        if(current_value==end){
            clearInterval(timer);
        }
    },obj.duration);


}