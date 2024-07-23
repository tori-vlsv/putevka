import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

function objectRoomSlider() {

  new Swiper('.object-card__slider', {
    modules: [ Navigation, Pagination ],
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    navigation: {
      nextEl: '.object-room__slider .swiper-button-next',
      prevEl: '.object-room__slider .swiper-button-prev',
    },
    pagination: {
      el: ".object-room__slider .swiper-pagination",
    },
  });
};
objectRoomSlider();


