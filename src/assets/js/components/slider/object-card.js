import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

function objectCardSlider() {

  new Swiper('.object-card__slider', {
    modules: [ Navigation, Pagination ],
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    navigation: {
      nextEl: '.object-card__slider .swiper-button-next',
      prevEl: '.object-card__slider .swiper-button-prev',
    },
    pagination: {
      el: ".object-card__slider .swiper-pagination",
    },
  });
};
objectCardSlider();


