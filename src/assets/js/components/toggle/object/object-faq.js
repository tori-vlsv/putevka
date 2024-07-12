function objectFaq() {
  let button = $('.object-faq__question');

  button.on('click', function() {
    $(this).toggleClass('active');
    $(this).next().toggle();

  });
}
objectFaq();