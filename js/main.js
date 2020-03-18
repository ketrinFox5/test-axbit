$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        prevArrow:
            '<img class="slick-prev slider__btn_prev slider__btn" src=img/btn.png>',
        nextArrow: 
            '<img class="slick-next slider__btn_next slider__btn" src=img/btn.png>',
    });
    $('.modal-open').on('click', function(event) {
        event.preventDefault();
        $('.modal').fadeIn();
        $('body').css({ "overflow" : "hidden"});
    });

    $('.modal__btn_close').on('click', function(event) {
        event.preventDefault();
        $('.modal').fadeOut();
        $('body').css({ "overflow" : "visible"});
    });
  });

