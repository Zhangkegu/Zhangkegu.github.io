//原型
//$.fn===$.prototype相当于往原型中添加属性
$.fn.extend({//这种写法等同于：jQuery.fn.extend;所有的$都可以用jQuery替换，效果相同；
   add:function (value) {
       //一般this只存在于各种事件中，比如点击事件，鼠标移入移出等事件
       this.text(this.text()+value);//这里的this直接是指jQuery的对象；
       console.log(this);//jquery对象#wrap这个div块儿就是这个this指代了；
   }
});
//把这个文件引入到19.jQuery的插件操作.html文件中的jQuery引入文件下面，就i能生效