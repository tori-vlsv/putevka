function aboutMapToggle() {
  let button = $('.about-map__button');
  let block = $('.about-map__cities');

  button.on('click', function() {
    $(this).toggleClass('active');
    block.toggleClass('active');
  });
}
aboutMapToggle();