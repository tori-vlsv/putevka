import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

function attractionsCityTypesSlider() {
  new Swiper('.attractions-city-types__slider', {
    modules: [ Scrollbar, Navigation ],
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 800,
    scrollbar: {
      el: ".attractions-city-types__slider .swiper-scrollbar",
    },
    navigation: {
      nextEl: '.attractions-city-types__navigation .swiper-button-next',
      prevEl: '.attractions-city-types__navigation .swiper-button-prev',
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
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 3,
        allowTouchMove: false,
        spaceBetween: 24,
      }
    }
  });
};
attractionsCityTypesSlider();