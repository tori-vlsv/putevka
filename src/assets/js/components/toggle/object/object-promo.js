function objectPromo() {
  let open = $('.object-promo__open');
  let description = $('.object-promo__description');
  let close = $('.object-promo__close');
  
  for(let i = 0; i < open.length; i++ ) {
    $(open[i]).on('click', function() {
      $(this).toggleClass('active');
      $(description[i]).toggleClass('active');
    });
  };

  for(let i = 0; i < close.length; i++ ) {
    $(close[i]).on('click', function() {
      $(description[i]).removeClass('active');
      $(open[i]).removeClass('active');
    });
  };

};
objectPromo();