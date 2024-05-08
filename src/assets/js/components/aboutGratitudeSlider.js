import Swiper from 'swiper';
import { Navigation, Scrollbar, Zoom } from 'swiper/modules';

function aboutGratitudeSlider() {
  new Swiper('.about-gratitude__slider', {
    modules: [ Navigation, Scrollbar, Zoom ],
    slidesPerView: 2.2,
    spaceBetween: 20,
    speed: 800,
    zoom: {
      maxRatio: 1.4,
    },
    navigation: {
      nextEl: '.about-gratitude__navigation .swiper-button-next',
      prevEl: '.about-gratitude__navigation .swiper-button-prev',
    },
    scrollbar: {
      el: ".about-gratitude__slider .swiper-scrollbar",
    },
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        loop: true,
      }
    }
  });
};
aboutGratitudeSlider();


