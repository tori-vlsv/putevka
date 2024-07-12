function objectAbout() {
  let text = $('.object-about__text');
  let button = $('.object-about__button');


  if($(text).height() > 90) {
    $(button).show();
  }  else {
    $(button).hide();
  };

  let textDefault = 'Читать полностью';
  let textOther = 'Свернуть описание';


  button.on('click', function() {
    text.toggleClass('active');
    
    if ($(this).text() === textDefault) {
      $(this).text(textOther);
    } else {
      $(this).text(textDefault);
    }
  });
  
}
objectAbout();