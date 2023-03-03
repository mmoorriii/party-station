$(document).ready(() => {
   $(function () {
      $('.accordion-body, .accordion-btn').click(function () {
         // Проверяем, открыто ли это окно
         var isOpen = $(this).parent().hasClass('open');

         // Закрываем все окна
         $('.accordion-item').removeClass('open');
         $('.accordion-btn').text('+');

         // Открываем только выбранное окно
         if (!isOpen) {
            $(this).parent().addClass('open');
            $(this).parent().find('.accordion-btn').text('-');
         }
      });
   });
})