$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 40){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    $('.menu-btn').click(function(){
        $('.navbar .navigation').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
}
)