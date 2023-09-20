$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 40){
            $('.navbarz').addClass("sticky");
        }else{
            $('.navbarz').removeClass("sticky");
        }
    })

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

$('#projects-show-more-btn').click(function(){
    const showProjects = document.querySelector('#projects-show-more');
    const showMorebtn = document.querySelector('#projects-show-more-btn');
    const showLessbtn = document.querySelector('#projects-show-less-btn');
    showProjects.style.height = 'auto';
    showMorebtn.style.display = 'none';
    showLessbtn.style.display = 'inline-block';
});

$('#projects-show-less-btn').click(function(){
    const showProjects = document.querySelector('#projects-show-more');
    const showMorebtn = document.querySelector('#projects-show-more-btn');
    const showLessbtn = document.querySelector('#projects-show-less-btn');
    showProjects.style.height = 0;
    showMorebtn.style.display = 'inline-block';
    showLessbtn.style.display = 'none';
});



$('#csc207').click(function(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var content = document.getElementById("modal-csc207")

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    content.style.display = "flex";
});

$('#csc413').click(function(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var content = document.getElementById("modal-csc413")

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    content.style.display = "flex";
});

$('#footy').click(function(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var content = document.getElementById("modal-footy")

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    content.style.display = "flex";
});

$('#sportsup').click(function(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var content = document.getElementById("modal-sportsup")

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    content.style.display = "flex";
});

$('#outlook').click(function(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var content = document.getElementById("modal-outlook")

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    content.style.display = "flex";
});

$('#moods').click(function(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var content = document.getElementById("modal-moods")

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    content.style.display = "flex";
});

$('#nstcnn').click(function(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var content = document.getElementById("modal-nstcnn")

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    content.style.display = "flex";
});

$('#assemblygame').click(function(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var content = document.getElementById("modal-assemblygame")

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    content.style.display = "flex";
});

$('#recamovie').click(function(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var content = document.getElementById("modal-recamovie")

    // When the user clicks on the button, open the modal
    modal.style.display = "block";
    content.style.display = "flex";
});

$('.close').click(function(e){
    e.preventDefault();
    //  get the modal
    var modal = document.getElementById("myModal");
    const modalId = e.target.id.split('-')[1];
    var content = document.getElementById(`modal-${modalId}`)

    // When the user clicks on the button, open the modal
    modal.style.display = "none";
    content.style.display = "none";
})