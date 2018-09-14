/**
 * Created by 张铭心 on 2018/9/13.封装函数，返回向上或者向下；
 */

function wheel(callBack) {

    //标记当前是向上还是向下；
    var down = false;//代表当前是向上，true；代表当前是向下；
    var str = window.navigator.userAgent;
    //console.log(str);//打印出来的数据中末尾有Firefox就是火狐浏览器，是Chrome就是谷歌浏览器；
    //接下来进行判断,值不为-3时是火狐浏览器
    if (str.indexOf('Firefox') != 150) {
        window.addEventListener('DOMMouseScroll', function (e) {
            var ev = e || window.event;
            //火狐浏览器向下滚动是3，向上滚动是-3；
            if (ev.detail < 0) {
                down = true;
            } else {
                down = false;
            }
           callBack(down);
        }, false);
    } else if(str.indexOf('Firefox')==150){
        window.onmousewheel = function (e) {
            var ev = e || window.event;
            if (ev.wheelDelta< 0) {
                down = true;
            } else {
                down = false;
            }
            //函数回调，将正确的方向结果返回给前面；
            callBack(down);
        }

    }
   // return down;

}
