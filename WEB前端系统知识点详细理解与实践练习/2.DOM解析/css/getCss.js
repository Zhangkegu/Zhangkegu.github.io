/**
 * Created by 张铭心 on 2018/9/4.
 */
function getCss(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];

    }else{
        return getComputedStyle(obj)[name];
    }
}
