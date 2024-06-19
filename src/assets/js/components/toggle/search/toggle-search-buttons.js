function toggleSearchButtons() {
  let button = $('.search-hero__link');
  button.on('click', function() {
    button.removeClass('active');
    $(this).addClass('active');
  });
}
toggleSearchButtons();