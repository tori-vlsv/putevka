function objectReviews() {
  let texts = $('.object-reviews__text');
  let buttons = $('.object-reviews__button');

  for( let i = 0; i < texts.length; i++ ) {
    if($(texts[i]).height() > 90) {
      $(buttons[i]).show();
    }  else {
      $(buttons[i]).hide();
    };
  };

  let textDefault = 'Читать полностью';
  let textOther = 'Свернуть';

  buttons.each(function(i) {
    $(this).on('click', function() {
      $(texts[i]).toggleClass('active');
      
      if ($(this).text() === textDefault) {
        $(this).text(textOther);
      } else {
        $(this).text(textDefault);
      }
    });
  });
}
objectReviews();