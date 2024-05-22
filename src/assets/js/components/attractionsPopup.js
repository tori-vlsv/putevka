import { disablePageScroll, enablePageScroll } from "scroll-lock";

function attractionsPopup() {
  let buttons = $('.attractions-button--open');
  let popup =  $('.attractions-city-main__sidebar');
  let container =  $('.attractions-sidebar__block--default');
  let close =  $('.attractions-sidebar__close');

  Array.from(buttons).forEach(function(el) {
    $(el).on('click', function() {
      popup.addClass('active');
      container.addClass('active');
      disablePageScroll();
    });
  });

  close.on('click', function() {
    popup.removeClass('active');
    container.removeClass('active');
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