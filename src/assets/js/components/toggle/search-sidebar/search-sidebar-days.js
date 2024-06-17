function searchSidebarDays() {

  let buttons = $('.search-sidebar__price');

  Array.from(buttons).forEach(function(el) {
    $(el).on('click', function() {
      buttons.removeClass('active');
      $(this).addClass('active');
    });
  });
};

searchSidebarDays();