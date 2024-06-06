function footerDropdown() {
  let button = $('.footer-nav__dropdown');

  button.on('click', function() {
    $(this).toggleClass('active');
  });
}
footerDropdown();