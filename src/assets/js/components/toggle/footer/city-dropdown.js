function footerCityDropdown() {
  let button = $('.footer-city__button');
  let container = $('.footer-city__links');
  let buttonText = $('.footer-city__button span');


  button.on('click', function() {
    if (container.hasClass('active')) {
      container.removeClass('active');
      button.removeClass('active');
      buttonText.text('Показать все');
    }
    else {
      container.addClass('active');
      button.addClass('active');
      buttonText.text('Свернуть');
    }
  });
}
footerCityDropdown();