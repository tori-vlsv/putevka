import { disablePageScroll, enablePageScroll } from "scroll-lock";

function reviewsPopup() {
  let button = $('.reviews-clients-card__button');
  let popup =  $('.reviews-popup');
  let closes =  $('.reviews-popup__close');
  button.on('click', function() {
    popup.addClass('active');
    disablePageScroll();
  });
  Array.from(closes).forEach(function(el) {
    $(el).on('click', function() {
      popup.removeClass('active');
      enablePageScroll();
    });
  });
}
reviewsPopup();