import Swiper from 'swiper';
import { Scrollbar, Grid, Mousewheel } from 'swiper/modules';


function mainTabsSlider() {
  new Swiper('.main-houses__tabs', {
    modules: [ Scrollbar, Grid, Mousewheel ],
    grabCursor: true,
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 10,
    speed: 800,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: {
      enabled: true,
      sensitivity: 4,
    },
  });
};
mainTabsSlider();