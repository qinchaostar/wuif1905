$(function () {
    let rightBtn = $('.rightBtn');
    let leftBtn = $('.leftBtn');
    let imgs = $('.bannerImg > li');
    let btns = $('.btnList  > li');
    let bannerLeft = $('.banner1');

    let imgWidth = imgs.width();
    let current = 0, next = 0;
    flag = true;
    imgs.css({left: imgWidth}).eq(0).css({left: 0});


    //右箭头
    rightBtn.click(function () {
        if (!flag) {
            return;
        }
        flag = false;
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        $(imgs[next]).css('left', imgWidth)

        imgs.eq(current).animate({left: -imgWidth})
        imgs.eq(next).animate({left: 0}, function () {
            flag = true;
        })

        btns.eq(current).removeClass('sun')
            .end().eq(next).addClass('sun');
        current = next;

    })
        //设置时间
        let t = setInterval(function () {
            rightBtn.triggerHandler('click')
        }, 3000)

        bannerLeft.mouseenter(function () {

            clearInterval(t);
            console.log(1);
        })

        bannerLeft.mouseleave(function () {
            t = setInterval(function () {
                rightBtn.triggerHandler('click')
            }, 3000)
        })
})