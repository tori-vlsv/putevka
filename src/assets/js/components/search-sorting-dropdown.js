function searchSortingDropdown() {
  let button = $('.search-sorting-dropdown__button');
  let container = $('.search-sorting-dropdown__items');
  let items = $('.search-sorting-dropdown__item');
  button.on('click', function() {
    $(this).toggleClass('active');
    container.toggleClass('active');
  });
  Array.from(items).forEach(function(el) {
    $(el).on('click', function() {
      items.removeClass('active');
      $(this).addClass('active');
      $('.search-sorting-dropdown__value').text($(this).text());
      $('.search-sorting-dropdown__input').val($(this).text());

      button.removeClass('active');
      container.removeClass('active');
    });
  });
  $(document).mouseup( function(e){
		if (!container.is(e.target) && container.has(e.target).length === 0 && !button.is(e.target) && button.has(e.target).length === 0 ) {
      button.removeClass('active');
      container.removeClass('active');
		}
	});
}
searchSortingDropdown();