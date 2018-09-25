window.onload = function(){
    searchEffect();
    timeBack();
    bannerEffect();
}


function searchEffect(){
    //获取banner高度
    var banner = document.querySelector('.jd_banner');
    var bannerHeight = banner.offsetHeight;
    // console.log(bannerHeight);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollTop);
    // document.querySelector('.jd_search').style.backgroundColor = 'rgba(233, 35, 34, '+(scrollTop / bannerHeight)+');';
    document.querySelector('.jd_search').style.backgroundColor = 'rgba(233, 35, 34, ' + scrollTop / bannerHeight + ')';
    window.onscroll = function () {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(scrollTop);
        // document.querySelector('.jd_search').style.backgroundColor = 'rgba(233, 35, 34, '+(scrollTop / bannerHeight)+');';
        document.querySelector('.jd_search').style.backgroundColor = 'rgba(233, 35, 34, ' + scrollTop / bannerHeight + ')';
    }
}

function timeBack(){
    var time = 3;//秒
    //1小时1分40秒 组成
    var hour = Math.floor(time / 3600);//1 --> 01
    var minute = Math.floor(time % 3600 / 60);
    var second = time % 60;
    var spans = document.querySelectorAll('.jd_sk_time span');
    // console.log(spans);
    spans[0].innerText = Math.floor(hour / 10);
    spans[1].innerText = hour % 10;
    spans[3].innerText = Math.floor(minute / 10);
    spans[4].innerText = minute % 10;
    spans[6].innerText = Math.floor(second / 10);
    spans[7].innerText = second % 10;
    setInterval(function(){
        time--;
        if(time < 0){
            return;
        }
        var hour = Math.floor(time / 3600);//1 --> 01
        var minute = Math.floor(time % 3600 / 60);
        var second = time % 60;
        var spans = document.querySelectorAll('.jd_sk_time span');
        // console.log(spans);
        spans[0].innerText = Math.floor(hour / 10);
        spans[1].innerText = hour % 10;
        spans[3].innerText = Math.floor(minute / 10);
        spans[4].innerText = minute % 10;
        spans[6].innerText = Math.floor(second / 10);
        spans[7].innerText = second % 10;
    },1000)
}


function bannerEffect(){
    // 1. 由于轮播图图片数量不确定，不能写死，必须要由 js 动态设置修改轮播图的页面结构
    // 1.0 把上面修改的首尾添加的删除掉
    // 1.1 获取轮播图结构 banner (.jd_banner)
    var banner = document.querySelector('.jd_banner');
    // 2.2 获取图片容器 imgBox (ul:first-of-type)
    var imgBox = banner.querySelector('ul:first-of-type');
    // 1.3 获取原始的第一张图片 first (li:first-of-type)
    var first = imgBox.querySelector('li:first-of-type');
    // 1.4 获取原始的最后一张图片 last (li:last-of-type)
    var last = imgBox.querySelector('li:last-of-type');
    // 1.5 在首尾插入两张图片 appendChild
    imgBox.appendChild(first.cloneNode(true));
    // insertBefore( 需要插入的元素，位置 )
    imgBox.insertBefore(last.cloneNode(true),first);

    //用Js来设置样式
    // 2. 设置对应的样式
    // 2.1 获取所有的 li 元素 (var lis); 一定要 console.log 测试是不是我们要的东西
    var lis = imgBox.querySelectorAll('li');
    // 2.2 获取 li 元素的数量 var count 一定要 console.log 测试是不是我们要的东西
    var count = lis.length;
    // 2.3 获取 banner 的宽度 var bannerWidth 一定要 console.log 测试是不是我们要的东西
    var bannerWidth = banner.offsetWidth;
    // 2.4 设置图片盒子的总宽度 (imgBox) 审查元素，看是否添加成功
    imgBox.style.width = count * bannerWidth + 'px';
    // 2.5 设置每个 li 元素的宽度为 bannerWidth
    for(var i=0;i<lis.length;i++){
        lis[i].style.width = bannerWidth + 'px';
    }
    // 3. 设置默认偏移 ( 负的一个 bannerWidth)
    imgBox.style.left = -bannerWidth+'px';

    // 4. 当屏幕宽度变化的时候，重新计算宽度
    window.onresize = function(){
        // 4.1. 重新获取 banner 的宽度 , 覆盖全局的宽度值
        bannerWidth = banner.offsetWidth;
        // 4.2 重新设置图片盒子的宽度
        imgBox.style.width = count * bannerWidth + 'px';
        // 4.3 重新设置每一个 li( 图片 ) 元素的宽度
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.width = bannerWidth + 'px';
        }
        // 4.4 重新设置定位值
        imgBox.style.left = -index * bannerWidth + 'px';
    }

    var index = 1;
    //2秒切换一次
    var timerId = setInterval(function(){
        index++; 
        imgBox.style.transition = "left .5s ease-in-out";
        imgBox.style.left = -index * bannerWidth + 'px';
        setTimeout(function(){
            if (index == count - 1) {
                index = 1;
                imgBox.style.transition = "none";
                imgBox.style.left = -index * bannerWidth + 'px';
            }
        },500)
    },2000)

    //手动轮播
    var startX,moveX,distanceX;
    imgBox.addEventListener('touchstart',function(e){
        clearInterval(timerId);
        startX = e.targetTouches[0].clientX;
    })
    imgBox.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].clientX;
        distanceX = moveX - startX;
        imgBox.style.transition = "none";
        imgBox.style.left = -index * bannerWidth + distanceX + 'px';
    })
    imgBox.addEventListener('touchend', function (e) {
        // 判断拖动距离的绝对值是不是大于100
        if(Math.abs(distanceX) > 100){
            if(distanceX > 0){
                index--;
            }else{
                index++;
            }
        }
        imgBox.style.transition = "left .5s ease-in-out";
        imgBox.style.left = -index * bannerWidth + 'px';
        setTimeout(function () {
            if (index == count - 1) {
                index = 1;
                imgBox.style.transition = "none";
                imgBox.style.left = -index * bannerWidth + 'px';
            }
            if(index == 0){
                index = count - 2;
                imgBox.style.transition = "none";
                imgBox.style.left = -index * bannerWidth + 'px';
            }
        }, 500)
    })
}
