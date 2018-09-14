//微信摇一摇的js封装
function shake(callBack) {
    //1.添加事件
    var last_x=last_y=last_z=0;
    var last_time=new Date().getTime();
    function initional() {
        if (window.DeviceMotionEvent) {
            window.addEventListener('deveceMotion', motionEvent, false);
        } else {
            alert('您得手机不支持摇一摇功能，请换手机再试');
        }
    }

    function motionEvent(event) {
        var gravity=event.accelerationIncludingGravity;
        //当前三者的和与上一次摇晃三者的和进行差值比较，然后除以一个时间差，最后乘以一个大的数值，如10000；

        var currentTime=new Date().getTime();

        //
        if(currentTime-last_time>100){
            var x=gravity.x;
            var y=gravity.y;
            var z=gravity.z;
            var speed=(x+y+z-last_x-last_y-last_z)/(currentTime-last_time)*10000;


            if(speed>3000){
                if (callBack){
                    callBack();
                }
            }
            last_x=x;
            last_y=y;
            last_z=z;
            last_time=currentTime;
        }
    }
}