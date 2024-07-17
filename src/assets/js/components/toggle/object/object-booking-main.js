function objectBookingMain() {
  let button = $('.object-booking-main__heading');
  let description = $('.object-booking-main__description');

  button.on('click', function() {
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
  });
}
objectBookingMain();