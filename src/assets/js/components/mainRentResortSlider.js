import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

function mainRentResortSlider() {
  const myCustomSlider = document.querySelectorAll('.main-rent-resort__slider .swiper');
  const sections = document.querySelectorAll('.main-rent-resort__slider');

  for( let i = 0; i < myCustomSlider.length; i++ ) {
    
    myCustomSlider[i].classList.add('swiper-' + i);
    sections[i].classList.add('main-rent-resort__slider-' + i);
    new Swiper('.main-rent-resort__slider-' + i + ' .swiper-' + i, {
      modules: [ Navigation, Scrollbar ],
      slidesPerView: 1.8,
      spaceBetween: 10,
      speed: 800,
      allowTouchMove: false,
      navigation: {
        nextEl: `.main-rent-resort__slider-${i} .swiper-button-next`,
        prevEl: `.main-rent-resort__slider-${i} .swiper-button-prev`,
      },
      scrollbar: {
        el: `.main-rent-resort__slider-${i} .swiper-scrollbar`,
      },
      breakpoints: {
        360: {
          slidesPerView: 2.1,
        },
        420: {
          slidesPerView: 2.9,
        },
        520: {
          slidesPerView: 3.2,
        },
        630: {
          slidesPerView: 4.1,
        },
        720: {
          slidesPerView: 4.9,
        },
        860: {
          slidesPerView: 5.3,
        },
        1024: {
          slidesPerView: 5.1,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 24
        }
      }
    });
  }
};
mainRentResortSlider();