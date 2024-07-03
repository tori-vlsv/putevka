function objectDropdown() {
  let tabs = $('.object-dropdown__header');
  let main = $('.object-dropdown__main');
  let button = $('.object-dropdown__button');


  for( let i = 0; i < tabs.length; i++ ) {
    $(tabs[i]).on('click', function() {
      $(this).toggleClass('active');
      $(main[i]).toggleClass('active');
    });
  };

  for( let i = 0; i < button.length; i++ ) {
    $(button[i]).on('click', function() {
      $(main[i]).removeClass('active');
      $(tabs[i]).removeClass('active');
    });
  };
}
objectDropdown();