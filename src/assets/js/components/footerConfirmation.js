import { disablePageScroll, enablePageScroll } from "scroll-lock";

function footerConfimation() {
  let button = $('.footer-confirmation__button');
  let popup =  $('.footer-confirmation-requisites');
  let container =  $('.footer-confirmation-requisites__wrapper');
  let close =  $('.footer-confirmation-requisites__close');
  
  button.on('click', function() {
    popup.addClass('active');
    disablePageScroll();
  });

  close.on('click', function() {
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
footerConfimation();