function mainRentDropdown() {
  let button = $('.main-rent-abroad__item');

  button.on('click', function() {
    $(this).toggleClass('active');
  });
}
mainRentDropdown();