function toggleMainTabs() {
  let button = $('.main-sanatorium__tab');
  button.on('click', function() {
    button.removeClass('active');
    $(this).addClass('active');
  });
}
toggleMainTabs();