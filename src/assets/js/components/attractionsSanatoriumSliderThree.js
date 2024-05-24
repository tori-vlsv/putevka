import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

function mainSanatoriumSliderThree() {
  new Swiper('.attractions-sanatorium__slider--three', {
    modules: [ Scrollbar, Navigation ],
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 800,
    scrollbar: {
      el: ".attractions-sanatorium__slider--three .swiper-scrollbar",
    },
    navigation: {
      nextEl: '.attractions-sanatorium__navigation .swiper-button-next',
      prevEl: '.attractions-sanatorium__navigation .swiper-button-prev',
    },
    breakpoints: {
      450: {
        slidesPerView: 1.4,
      },
      540: {
        slidesPerView: 1.7,
      },
      640: {
        slidesPerView: 1.9,
      },
      768: {
        slidesPerView: 2.4,
      },
      1024: {
        slidesPerView: 3,
        allowTouchMove: false,
        spaceBetween: 24,
      }
    }
  });
};
mainSanatoriumSliderThree();