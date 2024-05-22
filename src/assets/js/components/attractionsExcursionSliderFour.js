import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

function attractionsExcursionSlider() {
  new Swiper('.attractions-excursion__slider--four', {
    modules: [ Scrollbar, Navigation ],
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 800,
    scrollbar: {
      el: ".attractions-excursion__slider--four .swiper-scrollbar",
    },
    navigation: {
      nextEl: '.attractions-excursion__navigation .swiper-button-next',
      prevEl: '.attractions-excursion__navigation .swiper-button-prev',
    },
    breakpoints: {
      490: {
        slidesPerView: 1.7,
      },
      640: {
        slidesPerView: 2.2,
      },
      820: {
        slidesPerView: 2.9,
      },
      1024: {
        slidesPerView: 3.2,
      },
      1280: {
        slidesPerView: 4,
        allowTouchMove: false,
        spaceBetween: 20,
      }
    }
  });
};
attractionsExcursionSlider();