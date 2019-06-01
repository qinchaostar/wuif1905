window.onload = function () {
    let home = document.getElementById('headerBox1');
    let btnList = document.getElementsByClassName('btnList');
    let bannerPointer = btnList[0].getElementsByTagName('li');
    let activeColor = '#046b80', disactiveColor = '#fff'

//字体变色
    home.onmouseenter = function () {
        home.style.color = '#ff0000';
    }
    home.onmouseleave = function () {
        home.style.color = '#ffffff';
    }
//滚轮
    for (let i = 0; i < bannerPointer.length; i++) {
        bannerPointer[i].onmouseenter = function () {
            this.style.background = activeColor
        }
        bannerPointer[i].onmouseleave = function () {
            this.style.background = disactiveColor
        }
    }
    //下划线
    let diaryList = document.getElementsByClassName('diaryList');
    let listLi = diaryList[0].getElementsByTagName('li');
    for (let i = 0; i < listLi.length; i++) {
        listLi[i].onclick = function () {
            for (let j = 0; j < listLi.length; j++) {
                listLi[j].style.borderBottom = 'none'
            }
            this.style.borderBottom = '2px solid #000'
        }
    }
    //列表
    let tabList = document.querySelector('.tabList');
    let tabLists = tabList.querySelectorAll('.tabList > li');
    tabLists.forEach(function (elem, index) {
        elem.onmouseenter = function () {
            for (let i = 0; i < tabLists.length; i++) {
                tabLists[i].classList.remove('hot')
            }
            this.classList.add('hot')
        }
    })

    // for (var i=0;i<tabLists.length;i++){
    //     tabLists[i].onmouseenter=(function (i) {
    //         return function () {
    //             for (let j=0;j<tabLists.length;j++) {
    //                 tabLists[j].classList.remove('hot')
    //             }
    //             tabLists[i].classList.add('hot')
    //         }
    //     })(i)
    // }
    //左右滚轮
    let current = 0, next = 0;
    let rightBtn = document.querySelector('.rightBtn');
    let leftBtn = document.querySelector('.leftBtn');
    let bannerImg = document.querySelectorAll('.bannerImg > li')
    let w = bannerImg[0].offsetWidth;
    let flag = true;
    rightBtn.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        next++;
        if (next == bannerImg.length) {
            next = 0;
        }
        bannerImg[next].style.left = w + 'px';
        animate(bannerImg[current], {left: -w});
        animate(bannerImg[next], {left: 0}, function () {
            flag = true;
        });
        bannerPointer[current].style.backgroundColor = disactiveColor;
        bannerPointer[next].style.backgroundColor = activeColor;
        current = next;
    }

    leftBtn.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        next--;
        if (next < 0) {
            next = bannerImg.length - 1;
        }
        bannerImg[next].style.left = -w + 'px';
        animate(bannerImg[current], {left: w});
        animate(bannerImg[next], {left: 0}, function () {
            flag = true;
        });
        current = next;
    }
    // rightBtn.onclick=function () {
    //     index++;
    //     if (index==bannerImg.length){
    //         index=0;
    //     }
    //     bannerImg.forEach(function (elen) {
    //             elen.style.zIndex=1;
    //     })
    //     bannerImg[index].style.zIndex=999;
    // }
    //
    //
    // let leftBtn=document.querySelector('.leftBtn');
    // leftBtn.onclick=function () {
    //     index--;
    //     if (index==-1){
    //         index=bannerImg.length-1;
    //     }
    //     bannerImg.forEach(function (elen) {
    //         elen.style.zIndex=1;
    //     })
    //     bannerImg[index].style.zIndex=999;
    // }
    //鼠标的移入移出
    let bannleft = document.querySelector('.banner1')
    let t = setInterval(rightBtn.onclick, 3000)

    bannleft.onmouseenter = function () {
        clearInterval(t)
    }
    bannleft.onmouseleave = function () {
        t = setInterval(rightBtn.onclick, 3000)
    }


    //图片 圆点
    for (let i = 0; i < bannerPointer.length; i++) {
        bannerPointer[i].onclick = function () {
            if (current == i) {
                return;
            }
            next = i;
            if (next > current) {
                bannerImg[next].style.left = w + 'px';
                animate(bannerImg[current], {left: -w});
                animate(bannerImg[next], {left: 0});
            } else {
                bannerImg[next].style.left = -w + 'px';
                animate(bannerImg[current], {left: w});
                animate(bannerImg[next], {left: 0});
            }
            current = next;
        }
    }

    //图片加载
    let viewH=window.innerHeight;
    let imgs=document.querySelectorAll('.qc')
    let positionArr=[];
    imgs.forEach(function (ele) {
        let parent=ele.offsetParent;
        positionArr.push(parent.offsetTop+ele.offsetTop);
    });


    window.addEventListener('scroll',function () {

        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        for (let i=0;i<positionArr.length;i++){
            if (scrolltop+viewH>=positionArr[i]+100){
                imgs[i].src=imgs[i].getAttribute('aa');
            }
        }
    })
    // window.onscroll=

}


