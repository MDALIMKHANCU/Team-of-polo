$(document) .ready(function(){

    $('.slider_main') .owlCarousel({

        items:1,
        marign:0,
        stagepadding:0,
        loop:true,
        nav:true,
        dots:true,
        mouseDrag:false,
        touchDrag:false,
        pullDrag:false,
    });

    $('.slider_active_one') .owlCarousel({

        items:1,
        marign:0,
        stagepadding:0,
        autoplay:true,
        autoplayTimeout:2000,
        loop:true,
        nav:true,
        dots:true,
        mouseDrag:true,
        touchDrag:true,
        pullDrag:true,
    });


    $('.slider_active_another') .owlCarousel({

        items:1,
        marign:0,
        stagepadding:0,
        autoplay:true,
        autoplayTimeout:3000,
        loop:true,
        nav:true,
        dots:true,
        mouseDrag:true,
        touchDrag:true,
        pullDrag:true,
    });

     $('.counter').counterUp({
         delay: 10,
         time: 3000
     });
});
