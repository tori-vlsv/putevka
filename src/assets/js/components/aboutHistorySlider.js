import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

function aboutHistorySlider() {
  let slides = document.querySelectorAll('.about-history__slider .swiper-slide');
  let titles = [];
  let years = [];
  slides.forEach(function(element) {
    titles.push(element.dataset.title);
    years.push(element.dataset.year);
  });

  new Swiper('.about-history__slider', {
    modules: [ Navigation, Pagination, EffectFade ],
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.about-history__slider .swiper-button-next',
      prevEl: '.about-history__slider .swiper-button-prev',
    },
    pagination: {
      el: ".about-history__tabs",
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <div class="about-history__tab ${className}">
            <div class="about-history__container">
              <div class="about-history__icon">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <use xlink:href="#svg-point"></use>
                </svg>
              </div>
              <div class="about-history__year">${years[index]}</div>
            </div>
            <div class="about-history__text">${titles[index]}</div>
          </div>
        `
      },
    },
    on: {
      slideChange: function () {
        updateCurrentYear();
      },
      init: function () {
        updateCurrentYear();
      },
    },
  });
};
aboutHistorySlider();

function updateCurrentYear () {
  let activeYear = $('.about-history__tabs .swiper-pagination-bullet-active .about-history__year');
  let currentYear = $('.about-history__data');
  currentYear.text(activeYear.text() + ' год');
};



