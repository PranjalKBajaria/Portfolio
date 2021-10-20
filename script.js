$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 40){
            $('.navbarz').addClass("sticky");
        }else{
            $('.navbarz').removeClass("sticky");
        }
    })

    // $('.menu-btn').click(function(){
    //     $('.navbarz .navigation').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");
    // })

    $('.navbarz .navigation li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbarz .navigation').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
}
)