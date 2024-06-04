import Swiper from 'swiper';
import { Navigation, Grid } from 'swiper/modules';

function mainRentPopularSlider() {
  new Swiper('.main-rent-popular__slider .swiper', {
    modules: [ Navigation, Grid ],
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    allowTouchMove: false,
    grid: {
      rows: 4,
    },
    navigation: {
      nextEl: '.main-rent-popular__slider .swiper-button-next',
      prevEl: '.main-rent-popular__slider .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        allowTouchMove: true,
        grid: {
          rows: 1,
        },
      },
      1280: {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 24,
        grid: {
          rows: 1,
        },
      }
    }
  });
};
mainRentPopularSlider();