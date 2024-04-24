import Swiper from 'swiper';
import { Navigation, Grid } from 'swiper/modules';

function mainPromoSlider() {
  new Swiper('.main-promo .swiper', {
    modules: [ Navigation, Grid ],
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    allowTouchMove: false,
    grid: {
      rows: 4,
    },
    navigation: {
      nextEl: '.main-promo .swiper-button-next',
      prevEl: '.main-promo .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        allowTouchMove: true,
        grid: {
          rows: 1,
        },
      }
    }
  });
};
mainPromoSlider();