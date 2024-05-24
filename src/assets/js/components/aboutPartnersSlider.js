import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

function aboutPartnersSlider() {
  new Swiper('.about-partners__slider', {
    modules: [ Navigation, Scrollbar ],
    slidesPerView: 2.2,
    spaceBetween: 20,
    speed: 800,
    navigation: {
      nextEl: '.about-partners__navigation .swiper-button-next',
      prevEl: '.about-partners__navigation .swiper-button-prev',
    },
    scrollbar: {
      el: ".about-partners__slider .swiper-scrollbar",
    },
    breakpoints: {
      420: {
        slidesPerView: 2.6,
      },
      540: {
        slidesPerView: 2.9,
      },
      620: {
        slidesPerView: 3.2,
      },
      768: {
        slidesPerView: 4.1,
        spaceBetween: 24,
      },
      1024: {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 0,
      }
    }
  });
};
aboutPartnersSlider();


