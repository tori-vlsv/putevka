import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

function searchCardSlider() {

  new Swiper('.search-card__slider', {
    modules: [ Navigation, Pagination ],
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    navigation: {
      nextEl: '.search-card__slider .swiper-button-next',
      prevEl: '.search-card__slider .swiper-button-prev',
    },
    pagination: {
      el: ".search-card__slider .swiper-pagination",
    },
  });
};
searchCardSlider();


