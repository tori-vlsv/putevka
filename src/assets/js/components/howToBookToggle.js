import gsap from "gsap";

export default function howToBookToggle() {
  let button = $('.how-to-book-inner-faq__button');
  let container = $('.how-to-book-inner-faq__items');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('click', function () {
      let id = button[i].getAttribute('data-id');
      let block = $('.how-to-book-inner-faq__items[data-id="' + id + '"]');
      button.removeClass('active');
      $(this).addClass('active');
      gsap.to(container, {opacity: 0, duration: 0.3, onComplete: () => {
        gsap.to(container, {display: 'none', duration: 0});
        gsap.to($(block).attr('data-id', $(this).attr('data-id')), {display: 'block', duration: 0, onComplete: () => {
          $(block).attr('data-id', $(this).attr('data-id')).removeClass('active');
          $('.how-to-book-inner-faq__items[data-id="' + id + '"]').addClass('active');
          gsap.to($(block).attr('data-id', $(this).attr('data-id')), {opacity: 1, duration: 0.3});
        }});
      }});
    });
  }
}
howToBookToggle();

function howToBookItemDropdown() {
  let button = $('.how-to-book-inner-faq__question');

  button.on('click', function() {
    $(this).toggleClass('active');
    $(this).next().toggle();
  });
}
howToBookItemDropdown();

