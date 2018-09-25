$(function(){
    $(window).on('resize',function(){
        var w = $(window).width();
        var itemList = $('.carousel-inner item');
        if(w>=768){
            itemList.each(function(index,ele){
                var src = $(ele).attr('data-pc-images');
                var str = '<a herf = "javascript:; class="pcImg'
                $(ele).html(str);
            })
        }else{
            itemList.each(function(index,ele){
                var src = $(ele).sttr('data-mobile-image');
                var str = '<a href="javascript:;" class="mobileImg"><img src="'+src+'"></a>';
                var str = '<a href="javascript:;" class="mobileImg"><img src="'+src+'"></a>';
                $(ele).html(str);
            })
        }
    }).trigger('resize');
    var  startX,endX,distanceX;
     var carouse_inner= document.querySelector('.carousel-inner');
     carousel_inner.addEventListener('touchstart',function(e){
          startX = e.targetTouches[0].clientX;
     })
     carousel_inner.addEventListener('touchend',function(e){
       endX=e.changedTouches[0].clientX;
       distanceX = endX-startX;
       if(distanceX>0){
           $('.carousel').carousel('prev');
           console.log(12);
       }else{
           $('.carousel').carousel('next');
       }
     })
     $(function(){
         $('[data-toggle="tooltip"]').tooltip();
     })
     var ul = $('.wjs_product .nav-tabs');
     var lis = ul.find('li');
     var totalWidth=0;
     lis.each(function(index,ele){
       totalWidth+=$(ele).innerWidth();
     })
     ul.width(totalWidth);
     var mySceoll=new Iscroll(wrapper,{
         scrollX:true,
     })
})