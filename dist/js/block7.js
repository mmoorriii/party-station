$(document).ready(function () {
   if ($(window).width() >= 1200) {
      $('.block7__row-news').slick({
         appendArrows: '.block7__buttons-news',
         infinite: false,
         variableWidth: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         swipe: false,
         //touchThreshold: 15,
         waitForAnimate: false,
      });
      $('.block7__row-for-family').slick({
         appendArrows: '.block7__buttons-for-family',
         infinite: false,
         variableWidth: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         swipe: false,
         //touchThreshold: 15,
         waitForAnimate: false,
      });
      $('.block7__row-for-clever').slick({
         infinite: false,
         appendArrows: '.block7__buttons-for-clever',
         variableWidth: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         swipe: false,
         //touchThreshold: 15,
         waitForAnimate: false,
      });
   } else {
      $('.block7__row-news').slick('unslick');
      $('.block7__row-for-family').slick('unslick');
      $('.block7__row-for-clever').slick('unslick');
   };

   $('.block7__row-news').on('afterChange', function (event, slick, currentSlide) {
      var slides = slick.slideCount;

      if (($(window).width() >= 1400)) {
         var lastSlide = (slides - slick.options.slidesToShow) - 1;
      }
      else {
         var lastSlide = slides - slick.options.slidesToShow;
      }

      if (currentSlide === lastSlide) {
         $('.block7__buttons-news > .slick-next').css({
            "cursor": "default",
         });
         $('.block7__buttons-news > .slick-next').addClass('disable');

      } else {
         $('.block7__buttons-news > .slick-next').css({
            "cursor": "pointer",
         });
         $('.block7__buttons-news > .slick-next').removeClass('disable');
      }

      if (currentSlide === 0) {
         $('.block7__buttons-news > .slick-prev').css({
            "cursor": "default",
         });
         $('.block7__buttons-news > .slick-prev').addClass('disable');

      } else {
         $('.block7__buttons-news > .slick-prev').css({
            "cursor": "pointer",
         });
         $('.block7__buttons-news > .slick-prev').removeClass('disable');
      }
   });

   $('.block7__row-for-family').on('afterChange', function (event, slick, currentSlide) {
      var slides = slick.slideCount;

      if (($(window).width() >= 1400)) {
         var lastSlide = (slides - slick.options.slidesToShow) - 1;
      }
      else {
         var lastSlide = slides - slick.options.slidesToShow;
      }

      if (currentSlide === lastSlide) {
         $('.block7__buttons-for-family > .slick-next').css({
            "cursor": "default",
         });
         $('.block7__buttons-for-family > .slick-next').addClass('disable');

      } else {
         $('.block7__buttons-for-family > .slick-next').css({
            "cursor": "pointer",
         });
         $('.block7__buttons-for-family > .slick-next').removeClass('disable');
      }

      if (currentSlide === 0) {
         $('.block7__buttons-for-family > .slick-prev').css({
            "cursor": "default",
         });
         $('.block7__buttons-for-family > .slick-prev').addClass('disable');

      } else {
         $('.block7__buttons-for-family > .slick-prev').css({
            "cursor": "pointer",
         });
         $('.block7__buttons-for-family > .slick-prev').removeClass('disable');
      }
   });

   $('.block7__row-for-clever').on('afterChange', function (event, slick, currentSlide) {
      var slides = slick.slideCount;

      if (($(window).width() >= 1400)) {
         var lastSlide = (slides - slick.options.slidesToShow) - 1;
      }
      else {
         var lastSlide = slides - slick.options.slidesToShow;
      }

      if (currentSlide === lastSlide) {
         $('.block7__buttons-for-clever > .slick-next').css({
            "cursor": "default",
         });
         $('.block7__buttons-for-clever > .slick-next').addClass('disable');

      } else {
         $('.block7__buttons-for-clever > .slick-next').css({
            "cursor": "pointer",
         });
         $('.block7__buttons-for-clever > .slick-next').removeClass('disable');
      }

      if (currentSlide === 0) {
         $('.block7__buttons-for-clever > .slick-prev').css({
            "cursor": "default",
         });
         $('.block7__buttons-for-clever > .slick-prev').addClass('disable');

      } else {
         $('.block7__buttons-for-clever > .slick-prev').css({
            "cursor": "pointer",
         });
         $('.block7__buttons-for-clever > .slick-prev').removeClass('disable');
      }
   });
});