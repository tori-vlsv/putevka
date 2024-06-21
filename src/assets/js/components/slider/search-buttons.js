import Swiper from 'swiper';

function searchButtonsSlider() {
  const myCustomSlider = document.querySelectorAll('.search-buttons__slider .swiper');
  const sections = document.querySelectorAll('.search-buttons__slider');

  for( let i = 0; i < myCustomSlider.length; i++ ) {
    
    myCustomSlider[i].classList.add('swiper-' + i);
    sections[i].classList.add('search-buttons__slider-' + i);
    new Swiper('.search-buttons__slider-' + i + ' .swiper-' + i, {
      // slideToClickedSlide: true,
      slidesPerView: 'auto',
      freeMode: true,
      spaceBetween: 10,
      speed: 800,
    });
  }
};
searchButtonsSlider();