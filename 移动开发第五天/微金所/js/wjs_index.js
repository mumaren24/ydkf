$(function(){
    $(window).on('resize',function(){
        //获取到当前屏幕宽度，判断是不是大于768,如果大于，就用pc端代码，如果小于，就用移动端代码
        var w = $(window).width();
        var itemList = $('.carousel-inner .item');
        // console.log(itemList);
        // console.log(w);
        if(w >= 768){
            // console.log('pc');
            //ele是一个dom对象
            itemList.each(function(index,ele){
                // console.log(index,ele);
                var src = $(ele).attr('data-pc-image')
                var str = '<a href="javascript:;" class="pcImg" style="background-image: url('+src+');"></a>';
                // console.log(str);
                $(ele).html(str);
            })
        }else{
            // console.log('mobile');
            itemList.each(function(index,ele){
                var src = $(ele).attr('data-mobile-image');
                var str = '<a href="javascript:;" class="mobileImg"><img src = "'+src+'" ></a >';
                // console.log(str);
                $(ele).html(str);
            })
        }
    }).trigger('resize')
    //在页面一打开的时候，就让jquery帮我们主动触发一次resize事件 trigger 方法的作用就是让jq帮我们触发一次事件
})