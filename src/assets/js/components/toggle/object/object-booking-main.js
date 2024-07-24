function objectBookingMain() {
  let button = $('.object-booking-main__heading');

  button.on('click', function() {
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
  });
}
objectBookingMain();