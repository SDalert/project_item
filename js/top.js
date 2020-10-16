// 首页a标签
$('.category_nav li a').click(function() {
    $(this).addClass('cate_active').parent().siblings().find('a').removeClass('cate_active');
});
// 广告头部
$('.removeAdv').click(function() {
    $(this).parents('.advertising ').css('display', 'none');
});
// 地图
var heightScale = 0;
$('.search_city').mouseover(function(e) {
    var heightScale = ($('.scrollBar').height() - $('.scroll_nav').height()) / $('.scrollMap_u').height();
    // 获取对应字母下标
    // console.log($(e.target).index())
    // 每个字母对应的城市列表
    // console.log($('.scrollMap_u').children('li').eq($(e.target).index()))
    // 每个城市列表相对于顶部的距离
    // console.log($('.scrollMap_u').children('li').eq($(e.target).index()).position().top)
    var mtop = $('.scrollMap_u').children('li').eq($(e.target).index()).position().top;
    $('.scrollMap_u').stop().animate({
        marginTop: -mtop
    });
    // 滚动条和城市height比例
    // console.log($('.scrollMap_u').height());
    // console.log($('.scrollBar').height());
    $('.scroll_nav').stop().animate({
        top: mtop * heightScale
    });
});
// 滚轮拖动事件
$('.scroll_nav').mousedown(function(e) {
    var heightScale = ($('.scrollBar').height() - $('.scroll_nav').height()) / $('.scrollMap_u').height();

    // 滚轮距离文档顶部的距离
    // console.log($('.scroll_nav').offset().top);
    // console.log(e.pageY)
    var offTop = $('.scrollBar').offset().top + $('.scroll_nav').height() / 2;
    $(document).mousemove(function(e) {
        $('.scroll_nav').css('top', e.pageY - offTop + 'px');
        $('.scrollMap_u').css('margin-top', -(e.pageY - offTop) / heightScale + 'px');
        if ($('.scrollBar').offset().top >= $('.scroll_nav').offset().top) {
            $('.scroll_nav').css('top', 0 + 'px');
            $('.scrollMap_u').css('margin-top', 0 + 'px');
        }
        if (($('.scroll_nav').offset().top + $('.scroll_nav').height()) >= ($('.scrollBar').offset().top + $('.scrollBar').height())) {
            $('.scroll_nav').css('top', $('.scrollBar').height() - $('.scroll_nav').height() + 'px');
            $('.scrollMap_u').css('margin-top', ($('.scrollBar').height() - $('.scroll_nav').height()) / heightScale + 'px');
        }
    });
    $(document).mouseup(function(e) {
        $(document).unbind();
    });
});
// 滚轮事件 
$('.scrollContent')[0].onmousewheel = function(e) {
    var heightScale = ($('.scrollBar').height() - $('.scroll_nav').height()) / $('.scrollMap_u').height();

    var nav_scrolltop = $('.scroll_nav').position().top;
    // console.log(nav_scrolltop)
    if (e.wheelDelta < 0) {
        nav_scrolltop += 10;
        if (nav_scrolltop >= $('.scrollBar').height() - $('.scroll_nav').height()) {
            nav_scrolltop = $('.scrollBar').height() - $('.scroll_nav').height();
        }
        //     console.log("向下滚动");
        $('.scroll_nav').stop().animate({
            top: nav_scrolltop
        });
        $('.scrollMap_u').stop().animate({
            marginTop: -nav_scrolltop / heightScale
        });
    } else {
        //     console.log("向上滚动");  
        nav_scrolltop -= 10;
        if (nav_scrolltop <= 0) {
            nav_scrolltop = 0
        }
        $('.scroll_nav').stop().animate({
            top: nav_scrolltop
        });
        $('.scrollMap_u').stop().animate({
            marginTop: -nav_scrolltop / heightScale
        });
    };
};
// 侧边导航
$('.shop_mes li').hover(function(e) {
    $(this).children('.tool_tip').stop().animate({
        left: -92
    });
    $(this).children('.tool_tip').css('display', 'block')
}, function() {
    $(this).children('.tool_tip').css('left', '-121px')
    $(this).children('.tool_tip').css('display', 'none')

});
$('.shop_footer li').hover(function(e) {
    $(this).children('.tool_tip').stop().animate({
        left: -92
    });
    $(this).children('.tool_tip').css('display', 'block')
}, function() {
    $(this).children('.tool_tip').css('left', '-121px')
    $(this).children('.tool_tip').css('display', 'none')

});
// 右边导航购物车推拉
$('.shop_list').off().click(function() {
    if ($('.shop_bar').attr('data-index') == 0) {
        $('.shop_bar').attr('data-index', 1)
        $('.shop_bar').stop().animate({
            right: 0
        });
        $('.shop_cart').addClass('cartbg');
        $('.shop_list').addClass('bgactive');
        $('.shop_count').addClass('shopc_active');
    } else {
        $('.shop_bar').attr('data-index', 0);
        $('.shop_bar').stop().animate({
            right: -280
        });
        $('.shop_list').removeClass('bgactive');
        $('.shop_cart').removeClass('cartbg');
        $('.shop_count').removeClass('shopc_active');
    }
})
$('.guanbi').off().click(function() {
    $('.shop_bar').attr('data-index', 0)
    $('.shop_bar').stop().animate({
        right: -280
    });
    $('.shop_list').removeClass('bgactive');
    $('.shop_cart').removeClass('cartbg');
    $('.shop_count').removeClass('shopc_active');
})
$('.shop_f_go').css('display', 'block')