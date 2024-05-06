import Swiper from 'swiper';
import { Scrollbar, Grid } from 'swiper/modules';

function mainHousesSlider() {
  new Swiper('.main-houses__slider', {
    modules: [ Scrollbar, Grid ],
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 800,
    scrollbar: {
      el: ".main-houses__slider .swiper-scrollbar",
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
        grid: {
          fill: 'row',
          rows: 2,
        },
      }
    }
  });
};
mainHousesSlider();