function criteriasDropdown() {
  let item = $('.footer-criterias__item');
  let button = $('.footer-criterias__button');
  let buttonText = $('.footer-criterias__button span');

  button.on('click', function() {
    if (item.hasClass('show')) {
      item.removeClass('show');
      button.removeClass('active');
      buttonText.text('Показать все');
    }
    else {
      item.addClass('show');
      button.addClass('active');
      buttonText.text('Свернуть');
    }
  })
};
criteriasDropdown();