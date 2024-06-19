import { disablePageScroll, enablePageScroll } from "scroll-lock";

function searchSidebarFilter() {
  let button = $('.search-filter__setting');
  let popup =  $('.search__sidebar');
  let closes =  $('.search-sidebar__hidden');

  Array.from(closes).forEach(function(el) {
    $(el).on('click', function() {
      popup.removeClass('active');
      enablePageScroll();
    });
  });

  button.on('click', function() {
    popup.addClass('active');
    disablePageScroll();
  });
}
searchSidebarFilter();