$(function (){

    /* AOS EFFECT */
    AOS.init();

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        if( $(this).hasClass("is-active") ){
            $(".nav_side").addClass("on");
        }else{
            $(".nav_side").removeClass("on");
        }
    });

    /* HEAGER SHOW, HIDE EFFECT */
    let preScrollTop = 0;
    window.addEventListener('scroll',() => {
        let nextScrollTop = window.scrollY;
        console.log(nextScrollTop);
        if(preScrollTop < nextScrollTop) {//console.log('Down');
            $(".header").addClass("down");
        } else { //console.log('Up');
            $(".header").addClass("bg");
            $(".header").removeClass("down");
        }
        if(nextScrollTop === 0){
            $(".header").removeClass("bg");
        }
        preScrollTop = nextScrollTop;
    });


    /* SCROLL CHECK */
    const $counters = $(".scroll_on");
    const exposurePercentage = 100; // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정 /스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라감
    const loop = true; // 애니메이션 반복 여부를 설정 / true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨짐

    $(window).on('scroll', function() { 
        $counters.each(function() { // 각 "scroll_on" 클래스를 가진 요소에 대해 반복
            const $el = $(this);
            const rect = $el[0].getBoundingClientRect();// 요소의 위치 정보를 가져옴
            const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
            const contentHeight = rect.bottom - rect.top; // 요소의 높이
            // 요소가 화면에 특정 비율만큼 노출될 때 처리함
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 110) && rect.bottom >= (contentHeight * exposurePercentage / 110)) {
                $el.addClass('active');
            }
            // 요소가 화면에서 완전히 사라졌을 때 처리합
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();


});



