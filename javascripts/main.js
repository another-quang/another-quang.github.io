$(document).ready(() => {
  $('#fullpage').fullpage({
    menu: '#nav',
    controlArrows: false
  });

  $.fn.fullpage.setAllowScrolling(false, 'left, right');

  const $slider = $('.slider');
  $slider.slick({
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    responsive: [{
      breakpoint: 480,
      settings: {
        centerMode: true,
        infinite: true,
        slidesToShow: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        infinite: true,
        slidesToShow: 3
      }
    }]
  });


  // $slider.on('swipe', (event, slick, direction) => {
  //   $.fn.fullpage.setAllowScrolling(false);
  // });
  //
  // $slider.on('afterChange', (event, slick, currentSlide) => {
  //   $.fn.fullpage.setAllowScrolling(true);
  // });
});

$(window).load(() => {
  $('#overlay').addClass('overlay--disable');
});
