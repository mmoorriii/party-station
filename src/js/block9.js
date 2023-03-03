$(document).ready(function () {
   if ($(window).width() <= 1020) {
      $('.block9__slider-top').slick({
         arrows: false,
         swipe: false,
         fade: true,
         asNavFor: '.block9__slider-bottom',
         adaptiveHeight: true,
         infinite: false,
      });

      $('.block9__slider-bottom').slick({
         arrows: false,
         dots: true,
         infinite: false,
         appendDots: '.block9__slider-dots',
         asNavFor: '.block9__slider-top',
         adaptiveHeight: true,
         mobileFirst: true,
         responsive: [
            {
               breakpoint: 630,
               settings: {
                  centerMode: true,
                  variableWidth: true
               }
            }
         ]
      });
   } else {
      $('.block9__slider-top').slick('unslick');
      $('.block9__slider-bottom').slick('unslick');
   }
});