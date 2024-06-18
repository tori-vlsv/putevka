import { disablePageScroll, enablePageScroll } from "scroll-lock";

function searchSidebarFilter() {
  let button = $('.search-filter__setting');
  let popup =  $('.search__sidebar');
  let close =  $('.search-sidebar__close');

  button.on('click', function() {
    popup.addClass('active');
    disablePageScroll();
  });

  close.on('click', function() {
    popup.removeClass('active');
    enablePageScroll();
  });
}
searchSidebarFilter();