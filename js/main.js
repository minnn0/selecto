(function() {
    // 스크롤 위치
    var sc = 0;

    // 버튼 토글 공통
    $('.btn_toggle').on('click', function() {
        $(this).siblings().toggleClass('on');
    });

    // ***********************************************
    // **************** 메인페이지 ********************
    // ***********************************************
     
    // *********** depth2 ***********
    $('.gnb .depth1').on('mouseenter', function(){
        $('#header').addClass('on');
        $('.depth2').stop().slideDown(400);
    }).on('mouseleave', function(){
        $('#header').removeClass('on');
        $('.depth2').stop().slideUp(200);
    });

    // ******** 메인비주얼 슬라이더 **********
    // swiper 초기화
    var mainSlider = new Swiper('.main_slider', {
        loop: true, 
        speed: 500, 
        simulateTouch: false,  
        autoplay: { 
            delay: 4000, 
            disableOnInteraction: false, 
        },      
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },   
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });        
    
    // ******** 메뉴 슬라이더 *********
    var menuSlider = new Swiper('.menu_slider', {
        slidesPerView: 4, 
        spaceBetween: 8,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });   
    
    $('.main_menu .menu_slider_wrap').on('click', function(e) {
        e.preventDefault();
    });

    // ****** 푸터 마크 슬라이더 ******
    var markSlider = new Swiper('.mark_slider', {
        slidesPerView: 8, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });   

    // ******* 창업문의 애니메이션 *******
    var franchiseWrap = $('.main_franchise .franchise_wrap')
    $(window).scroll(function() {
        sc = $(this).scrollTop();
        
        if(sc >= 800) {
            franchiseWrap.addClass('on');
        }
    }).trigger('scroll');
    
    // ************ 탑버튼 ************
    var btnTop = $('#footer .top_wrap .btn_top');
    btnTop.hide();
    // 스크롤바 위치가 400이 넘어가면 top버튼 보임
    $(window).scroll(function() {
        sc = $(this).scrollTop();
        
        if(sc >= 400) {
            btnTop.fadeIn();
        } else{
            btnTop.fadeOut();
        };
    }).trigger('scroll');
    // 탑버튼 클릭시 페이지 최상단으로 이동
    btnTop.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0});
    });
    
    // ***********************************************
    // **************** 서브페이지 ********************
    // ***********************************************
    
    // ************ 브랜드 스토리 애니메이션 ***********
    var specialTea = $('.about_selecto .special_tea')
    var selectShop = $('.about_selecto .select_shop')
    var brandBi = $('.brand_bi .bi_wrap')
    var brandPattern = $('.brand_pattern .pattern_wrap')
    $(window).scroll(function() {
        sc = $(this).scrollTop();
        
        if(sc >= 450){
            specialTea.addClass('on');
        };
        if(sc >= 930){
            selectShop.addClass('on');
        };
        if(sc >= 1610){
            brandBi.addClass('on');
        };
        if(sc >= 2260){
            brandPattern.addClass('on');
        };
    }).trigger('scroll');
})();
    

