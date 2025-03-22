///// Header Fix on Scroll /////

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.getElementById('manin-navbar').classList.add('sticky');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('manin-navbar').classList.remove('sticky');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

///// Amazing Features /////
$(".amazing-features").slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });

///// PLAYERS LOVE TOPTEAM11 /////
$(".TestimonialsSlider").slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

///// PLAYERS LOVE TOPTEAM11 TWO /////
$(".TestimonialsSliderTwo").slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  ///// PLAYERS LOVE TOPTEAM11 TWO /////
$(".PartnersSlider").slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

///// PLAYERS LOVE TOPTEAM11 /////
  $(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
          $('.BottomToTopBtn').addClass('active').fadeIn();
        } else {
          $('.BottomToTopBtn').removeClass('active').fadeOut();
        }
      });
      // scroll body to 0px on click
      $('.BottomToTopBtn').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400);
        return false;
      });
  });