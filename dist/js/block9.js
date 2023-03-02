$(document).ready(function () {
   if ($(window).width() <= 1200) {
      $('.block9__slider-top').slick({
         arrows: false,
         swipe: false,
         fade: true,
      });

      $('.block9__slider-bottom').slick({
         arrows: false,
         dots: true,
         infinite: false,
         appendDots: '.block9__slider-dots',
      });
   } else {
      $('.block7__row').slick('unslick');
   }
});