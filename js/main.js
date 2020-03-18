$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        centerPadding: '70px',
        slidesToShow: 4,
        slidesToScroll: 1, 
        prevArrow:
            '<img class="slick-prev slider__btn_prev slider__btn" src=img/btn.png>',
        nextArrow: 
            '<img class="slick-next slider__btn_next slider__btn" src=img/btn.png>',
    });

    /* Modal */

    $('.modal-open').on('click', function(event) {
        event.preventDefault();
        $('.modal').fadeIn();
        $('body').css({ "overflow" : "hidden"});
    });

    /* Close modal */

    $('.modal__btn_close').on('click', function(event) {
        event.preventDefault();
        $('.modal').fadeOut();
        $('body').css({ "overflow" : "visible"});
    });

    /* Close modal by ESC */

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal').fadeOut();
            $('body').css({ "overflow" : "visible"});
        }
    });

    /* Click on the background, but not on the window */

    $('.modal').on('click', function(e) {
        e.preventDefault();
        if ($(e.target).closest('.modal__wrap').length == 0) {
            $(this).fadeOut();		
            $('body').css({ "overflow" : "visible"});			
        }
    });
  });

