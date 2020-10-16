// 轮播图
var ary = location.href.split("&");
jQuery(".slideBox").slide({ mainCell: ".bd ul", autoPlay: true, trigger: "click", delayTime: 1000 });
// 公告促销
$('.tit a').mouseover(function() {
        $(this).addClass('on').siblings().removeClass('on')
            // if ($(this).hasclass())
        if ($(this).hasClass('tit_f')) {
            $(this).parent().next().children('.con_f').fadeIn().siblings().fadeOut();
        } else {
            $(this).parent().next().children('.con_f').fadeOut().siblings().fadeIn();
        }
    })
    // 好货大聚惠
function moveAnimate2(ele, target) {
    clearInterval(ele.interId);
    // 设置定时器
    ele.interId = setInterval(function() {
        // 当等于目标时清除定时器
        if (ele.offsetLeft == target) {
            clearInterval(ele.interId);
            // 向右走
        } else if (ele.offsetLeft < target) {
            // 对最后一步做了调整---target
            var step = (ele.offsetLeft + 13) > target ? target : ele.offsetLeft + 5;
            ele.style.left = step + 'px';
            // 向左走
        } else if (ele.offsetLeft > target) {
            var step = (ele.offsetLeft - 13) < target ? target : ele.offsetLeft - 5;
            ele.style.left = step + 'px';
        }
    }, 10);
}
var count = 0;
$('.view_next').click(function() {
    count++;
    if (count == 11) {
        $('.hh_ul')[0].style.left = '0px';
        count = 1;
    }
    var tar = count * -238;
    moveAnimate2($('.hh_ul')[0], tar)
})
$('.view_pre').click(function() {
    if (count == 0) {
        count = 10;
        $('.hh_ul')[0].style.left = count * -238 + 'px';
    }
    count--;
    var tar = count * -238;
    moveAnimate2($('.hh_ul')[0], tar)
})

function auto() {
    $('.hh_ul')[0].time = setInterval(function() {
        $('.view_next').click()
    }, 1500)
}
auto()
$('.view_bottom').hover(function() {
    $('.view_pre').css('display', 'block');
    $('.view_next').css('display', 'block');
    clearInterval($('.hh_ul')[0].time)
}, function() {
    $('.view_pre').css('display', 'none');
    $('.view_next').css('display', 'none');
    auto()
})

$(document).scroll(function() {
    var sTop = $(window).scrollTop();
    if (sTop > $('.index-layout').offset().top) {
        $('.index_sidebar').fadeIn()
        $('.index_sidebar').css('opacity', 1)
    } else {
        $('.index_sidebar').fadeOut()
        $('.index_sidebar').css('opacity', 0)

    }
    $('.index-layout').children('div').not('.f_goods,.division').each(function(index) {
        if (sTop > $('.index-layout').children('div').not('.f_goods,.division').eq(index).offset().top - 200) {
            $('.index_sidebar li').eq(index).addClass('sidebar_active').siblings().removeClass('sidebar_active')
        }
    })
    $('.index_sidebar li').not('.goback').off().click(function() {
        $('body,html').animate({
            scrollTop: $('.index-layout').children('div').not('.f_goods,.division').eq($(this).index()).offset().top - 100
        })
    })
    $('.index_sidebar li.goback').off().click(function() {
        $('body,html').animate({
            scrollTop: 0
        })

    })
})