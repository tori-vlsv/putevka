function footerCityDropdown() {
  let button = $('.footer-city__button');
  let container = $('.footer-city__links');

  button.on('click', function() {
    $(this).addClass('active');
    container.addClass('active');
  });
}
footerCityDropdown();