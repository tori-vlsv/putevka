import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

function aboutMediaSlider() {

  new Swiper('.about-media__slider', {
    modules: [ Navigation, Scrollbar ],
    slidesPerView: 1.12,
    spaceBetween: 20,
    speed: 800,
    navigation: {
      nextEl: '.about-media__navigation .swiper-button-next',
      prevEl: '.about-media__navigation .swiper-button-prev',
    },
    scrollbar: {
      el: ".about-media__slider .swiper-scrollbar",
    },
    breakpoints: {
      420: {
        slidesPerView: 1.5,
        allowTouchMove: true,
      },
      540: {
        slidesPerView: 1.8,
        allowTouchMove: true,
      },
      620: {
        slidesPerView: 1.95,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    }
  });
};
aboutMediaSlider();


