

//构造函数
//jquery本身是一个数组对象
//arg是我们传过来的#wrap值；
function JQuery(arg) {
    var div=document.querySelector("#wrap");
    this.push(div);
    console.log(div);
    //此函数的作用是对标签添加点击事件；
    this.click=function (fn) {
        this[0].onclick=fn;
    }

}

/*var a=new jQuery('#wrap');
a.click(function() {
    console.log(this);
});*/
//原型，如果某个构造函数的原型是数组，那么通过这个构造函数所创建的对象就有了数组的功能；
JQuery.prototype=[];

function $(arg) {
    return new JQuery(arg);
}