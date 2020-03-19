$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        responsive: [
            {
              breakpoint: 1730,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                centerMode: true
              }
            },
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1,
                centerMode: true
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  infinite: true,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding : '1%'
                  // mobileFirst: true
                }
              }
              // {
              //   breakpoint: 390,
              //   settings: {
              //     slidesToShow: 1,
              //     infinite: true,
              //     slidesToScroll: 1,
              //     centerMode: true,
              //     centerPadding : '0.5%'
              //     // mobileFirst: true
              //     // variableWidth: true
              //   }
              // }
          ],
          
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
        if ($(e.target).closest('.modal__wrap').length == 0) {
            $(this).fadeOut();		
            $('body').css({ "overflow" : "visible"});			
        }
    });
  });

