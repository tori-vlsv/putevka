import { disablePageScroll, enablePageScroll } from "scroll-lock";

function searchSidebarStation() {
  let button = $('.search-sidebar-station__button');
  let popup =  $('.search-station-popup');
  let container =  $('.search-station-popup__wrapper');
  let close =  $('.search-station-popup__close');


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
searchSidebarStation();

function searchSidebarDropdown() {
  let button = $('.search-station-popup-dropdown');
  let menu =  $('.search-station-popup-dropdown__menu');

  button.on('click', function() {
    $(this).toggleClass('active');
  });

  $(document).mouseup( function(e){
		if ( button.hasClass('active') && !button.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0 ) { 
      button.removeClass('active');
		}
	});

}
searchSidebarDropdown();