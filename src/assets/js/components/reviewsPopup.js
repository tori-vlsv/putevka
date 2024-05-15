import { disablePageScroll, enablePageScroll } from "scroll-lock";

function reviewsPopup() {
  let button = $('.reviews-clients-card__button');
  let popup =  $('.reviews-popup');
  let container =  $('.reviews-popup__wrapper');
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

  $(document).mouseup( function(e){
		if ( !container.is(e.target) && container.has(e.target).length === 0 ) { 
      popup.removeClass('active');
      enablePageScroll();
		}
	});
}
reviewsPopup();