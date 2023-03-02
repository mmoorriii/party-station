$(document).ready(function () {
   if ($(window).width() <= 630) {
      $('.block4__slider').slick({
         infinite: false,
         arrows: false,
         dots: true,
         appendDots: '.block4__slider-dots',
         variableWidth: true,
         centerMode: true,
      });
   } else {
      $('.block4__slider').slick('unslick');
   }
});