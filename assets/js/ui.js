$(function (){

    let preScrollTop = 0;

    window.addEventListener('scroll',() => {
        let nextScrollTop = window.scrollY;
        if(preScrollTop < nextScrollTop) {
            //console.log('Down!');
            $(".header").addClass("down");
        } else { 
            //console.log('Up!');
            $(".header").removeClass("down");
        }
        preScrollTop = nextScrollTop;
    });


    // 모션
    AOS.init();




});


