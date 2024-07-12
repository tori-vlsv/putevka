function objectDescription() {
  let texts = $('.object-description-line__text');
  let buttons = $('.object-description-line__button');
  let descriptions = $('.object-description__open');


  for( let i = 0; i < texts.length; i++ ) {
    if($(texts[i]).height() > 50) {
      $(buttons[i]).show();
    } else {
      $(buttons[i]).hide();
    };
  };

  let textDefault = 'Развернуть описание';
  let textOther = 'Свернуть';

  buttons.each(function(i) {
    $(this).on('click', function() {
      $(texts[i]).toggleClass('active');
      $(descriptions[i]).toggleClass('active');

      
      if ($(this).text() === textDefault) {
        $(this).text(textOther);
      } else {
        $(this).text(textDefault);
      }
    });
  });
}
objectDescription();