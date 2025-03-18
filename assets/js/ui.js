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
        if(preScrollTop < nextScrollTop) {//console.log('Down');
            $(".header").addClass("down");
        } else { //console.log('Up');
            $(".header").addClass("bg");
            $(".header").removeClass("down");
        }
        if(nextScrollTop === 0){
            $(".header").removeClass("bg");
            $(".header").removeClass("down");
        }
        preScrollTop = nextScrollTop;
    });

    /* SCROLL CHECK */
    const $counters = $(".scroll_on");
    const exposurePercentage = 100;
    const loop = true;

    $(window).on('scroll', function() { 
        $counters.each(function() {
            const $el = $(this);
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight;
            const contentHeight = rect.bottom - rect.top;
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 110) && rect.bottom >= (contentHeight * exposurePercentage / 110)) {
                $el.addClass('active');
            }
            if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                $el.removeClass('active');
            }
        });
    }).scroll();

    /* MO -> AOS SCROLL ELEMENT OPTION REMOVE */
    function mo_aos_delay(){
        if( $(window).width() < 1024){
            $(".aspiration_box_inner ul li").removeAttr("data-aos-delay"); // team page
            $(".history_tit_box_inner h2 p").removeAttr("data-aos-delay"); // company page
        }
    }
    mo_aos_delay();

    /* MO -> height 100vh */
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();

    /* RESIZE FUNCTION */
    $(window).resize(function() {
        setScreenSize();
    }); 

});


