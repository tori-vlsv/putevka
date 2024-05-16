import { disablePageScroll, enablePageScroll } from "scroll-lock";

function reviewsCreatePopup() {
  let button = $('.reviews-clients__button');
  let popup =  $('.reviews-create-popup');
  let container =  $('.reviews-create-popup__wrapper');
  let close =  $('.reviews-create-popup__close');
  let submit =  $('.reviews-create-popup__button');

  button.on('click', function() {
    popup.addClass('active');
    disablePageScroll();
  });
  close.on('click', function() {
    popup.removeClass('active');
    enablePageScroll();
  });
  submit.on('click', function() {
    popup.removeClass('active');
    enablePageScroll();
  });

  $(document).mouseup( function(e){
		if ( popup.hasClass('active') && !container.is(e.target) && container.has(e.target).length === 0 ) { 
      popup.removeClass('active');
      enablePageScroll();
		}
	});
}
reviewsCreatePopup();