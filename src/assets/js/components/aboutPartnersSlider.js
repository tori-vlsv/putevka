import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

function aboutPartnersSlider() {
  new Swiper('.about-partners__slider', {
    modules: [ Navigation, Scrollbar ],
    slidesPerView: 2.2,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.about-partners__navigation .swiper-button-next',
      prevEl: '.about-partners__navigation .swiper-button-prev',
    },
    scrollbar: {
      el: ".about-partners__slider .swiper-scrollbar",
    },
    breakpoints: {
      768: {
        slidesPerView: 4.1,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 0,
      }
    }
  });
};
aboutPartnersSlider();


