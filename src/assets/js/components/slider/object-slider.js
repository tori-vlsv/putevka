import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

function objectSlider() {
  new Swiper('.object-gallery__slider', {
    modules: [ Navigation, Scrollbar ],
    slidesPerView: 2.2,
    spaceBetween: 4,
    initialSlide: 1,
    speed: 800,
    navigation: {
      nextEl: '.object-gallery__slider .swiper-button-next',
      prevEl: '.object-gallery__slider .swiper-button-prev',
    },
    scrollbar: {
      el: ".object-gallery__slider .swiper-scrollbar",
    },
    breakpoints: {
      768: {
        slidesPerView: 3.5,
      },
      1280: {
        slidesPerView: 4,
      },
      1560: {
        slidesPerView: 4,
      }
    }
  });
};
objectSlider();


