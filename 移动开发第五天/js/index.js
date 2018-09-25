// $(function(){
//     $(window).on('resize',function(){
//         var w = $(window).width();
//         var itemList = $('.carousel-inner .item');
       
//         if(w >= 768){
//             itemList.each(function(index,ele){ 
//                 var src = $(ele).attr('data-pc-image')
//                 var str = '<a href="javascript:;" class="pcImg" style="background-image: url('+src+');"></a>';
//                 $(ele).html(str);
//             })
//         }else{
//             itemList.each(function(index,ele){
//                 var src = $(ele).attr('data-mobile-image');
//                 var str = '<a href="javascript:;" class="mobileImg"><img src = "'+src+'" ></a >'; 
//                 $(ele).html(str);
//             })
//         }
//     }).trigger('resize')
    
// })
// $(function(){
//     $(window).on('resize',function(){
//         var w = $(window).width();
//         var itemList = $('.carousel-inner .item');
//         if( w>=768){
//             console.log(123);
//              itemList.each(function(index,ele){
//                  var src=$(ele).attr('data-pc-image');
//                  var str='<a href="javascript:;" class="pcImg" style="background-image: url('+src+');"></a>';
//                  $(ele).html(str);
//                 })
//         }
//             else{
//                 itemList.each(function(index,ele){
//                     var src = $(ele).attr('data-mobile-image');
//                     var str ='<a href="javascript:;" class="mobileImg"><img src="'+src+'"></a>'
//                     $(ele).html(str);
//                 })

//         }
//     }).trigger('resize');
// })

$(function(){
    $(window).on('resize',function(){
        var w = $(window).width();
        var itemList = $('.carousel-inner .item');
        // console.log(123);
        if(w>=768){
            itemList.each(function(index,ele){
                var src=$(ele).attr('data-pc-image');
                var str = '<a href="javascript:;" class="pcImg" style="background-image:url('+src+');"></a>';
                $(ele).html(str);
            })
                               
        }else{
            itemList.each(function(index,ele){
                var src = $(ele).attr('data-mobile-image');
                var str = '<a href="javascript:;" class="mobileImg"><img src="'+src+'"></a>';
                $(ele).html(str);
            })
        }
    }).trigger('resize');
        var startX,endX,distanceX;
        var carousel_inner=document.querySelector('.carousel-inner');
        carousel_inner.addEventListener('touchstart',function(e){
            staryX = e.targetTouches[0].clientX;
        })
        carousel_inner.addEventListener('touchend',function(e){
            endX=e.changedTouches[0].clientX;
            distanceX = endX-startX;
            if(distanceX>0){
                $('.carousel').carousel('prev');
                console.log(12);
            }else{
                $('.carousel').carousel('next');
                console.log(34);
            }
        })




        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
          })
        //设置li宽度
        var ul = $('.wjs_product .nav-tabs');
        var lis = ul.find('li');
        var totalWidth=0;
        lis.each(function(index,ele){
            totalWidth+=$(ele).innerWidth();  
        })
        ul.width(totalWidth);
        var mySceoll=new IScroll(wrapper,{
            scrollX:true,
        })
     
})
// $(function(){
//     $(window).on('resize',function(){
//         var w=$(window).width();
//         var itemList = $('.caroudel-inner .item');
//         if(w>=768){
//             itemList.each(function(index,ele){
//                 var src=$(ele).attr('data-pc-image');
//                 var str='<a href="javascript:;" class="pcImg" style="background-image:url('+src+');"></a>';
//                 $(ele).html(str);
//             })
//         }else{
//             itemList.each(function(index,ele){
//                 var src=$(ele).attr('data-mobile-image');
//                 var str='<a href="javascript:;" class="mobileImg"><img src="'+src+'"></a>';
//                 $(ele).html(str);
//             })
//         }
//     }).trigger('resize');
    // var startX,endX,distanceX;
    // var carousel_inner=document.querySelector('.carousel-inner');
    // carousel_inner.addEventListener('touchstart',function(e){
    //     startX = e.targetTouches[0].clientX;
    // })
    // carousel_inner.addEventListener('touchend',function(e){
    //     endX = e.targetTouches[0].clientX;
    //     distanceX=endX-startX;
    // })
    // if(distanceX>0){
    //     $('.carousel').carousel('prev');
    // }else{
    //     $('.carousel').carousel('next');
    // }
      
    // var ul = $('.wjs_product .nav-tabs');
    // var lis=ul.find('li');
    // var totalWidth = 0;
    // lis.each(function(index,ele){
    //     totalWidth+=$(ele).innerWidth();
    // })
    // ul.width(totalWidth);
    // var mySceoll=new IScroll(wrapper,{
    //     scrollX:true,
    // })
// })





