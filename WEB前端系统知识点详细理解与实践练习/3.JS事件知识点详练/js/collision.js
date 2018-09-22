/**
 * Created by 张铭心 on 2018/9/13.
 */
function collision(obj1,obj2,rightCall,falseCall){
    //左右情况检测
    var minX=obj2.offsetLeft-obj1.offsetWidth;
    var maxX=obj2.offsetLeft+obj2.offsetWidth;
    var minY=obj2.offsetTop-obj1.offsetHeight;
    var maxY=obj2.offsetTop+obj2.offsetHeight;
    if(obj1.offsetLeft>=minX && obj1.offsetLeft<=maxX && obj1.offsetTop>=minY && obj1.offsetTop<=maxY) {
        //obj2.style.backgroudColor='red';
        if (rightCall) {
            rightCall();
        } else {
            if (falseCall) {
                falseCall();
            }
        }
    }
}
function move(moveObj,endObj,rightCall,falseCall) {
    moveObj.onmousedown = function (e) {
        var ev = e || window.event;
        var current_x = ev.offsetX;//相对自身的宽
        var current_y = ev.offsetY;
        document.onmousemove = function (e) {
            var ev = e || window.event;
            var off_x = ev.clientX;
            var off_y = ev.clientY;
            moveObj.style.left = off_x - current_x + 'px';
            moveObj.style.top = off_y - current_y + 'px';
            collision(moveObj,endObj,rightCall,falseCall);
        };
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }
}