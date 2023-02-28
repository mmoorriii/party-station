$(document).ready(function () {
   //$('.block4__slider').slick({
   //   infinite: false,
   //   arrows: false,
   //   dots: true,
   //   appendDots: '.block4__slider-dots',
   //   swipeToSlide: true,
   //   mobileFirst: true,
   //   variableWidth: true,
   //   centerMode: true,
   //   //responsive: [
   //   //   {
   //   //      breakpoint: 321,
   //   //      settings: {
   //   //         dots: false,
   //   //      }
   //   //   }
   //   //]
   //});

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


   //---ADD IMAGE IF WINDOW WIDTH MORE THEN 540PX----------------------------------------------------------------------------------
   //window.addEventListener('resize', function () {
   //   if (window.innerWidth >= 630) {
   //      $('#block1').after('<img class="arrow-up" src="../img/arrow-up.svg" alt="">');
   //   } else {
   //   }
   //});

});