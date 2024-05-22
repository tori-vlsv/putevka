import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

function attractionsExcursionSliderThree() {
  new Swiper('.attractions-excursion__slider--three', {
    modules: [ Scrollbar, Navigation ],
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 800,
    scrollbar: {
      el: ".attractions-excursion__slider--three .swiper-scrollbar",
    },
    navigation: {
      nextEl: '.attractions-excursion__navigation .swiper-button-next',
      prevEl: '.attractions-excursion__navigation .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.4,
      },
      1024: {
        slidesPerView: 3,
        allowTouchMove: false,
        spaceBetween: 24,
      },
    }
  });
};
attractionsExcursionSliderThree();