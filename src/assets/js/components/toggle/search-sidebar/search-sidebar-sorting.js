import { disablePageScroll, enablePageScroll } from "scroll-lock";

function attractionsPopup() {
  let button = $('.search-filter__sorting');
  let popup =  $('.search-sorting-popup');
  let container =  $('.search-sorting-popup__wrapper');
  let close =  $('.search-sorting-popup__close');


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
      container.removeClass('active');
      enablePageScroll();
		}
	});
}
attractionsPopup();