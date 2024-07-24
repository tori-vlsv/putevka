function objectRoom() {
  let open = $('.object-room__open');
  let description = $('.object-room__description');
  let close = $('.object-room__close');
  
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
objectRoom();
