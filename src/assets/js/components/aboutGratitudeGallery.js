import lightGallery from "lightgallery";
import lgPager from 'lightgallery/plugins/pager'
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from "scroll-lock";

function gallery() {
  let galleries = $('.gallery');
  Array.from(galleries).forEach(function(gallery) {
    lightGallery(gallery, {
      licenseKey: 'UNLICENSED',
      controls: true,
      plugins: [lgPager]
    });
  });
  $('.lg-outer, .about-gratitude__slider .swiper-slide').on('click', function() {
    if ($('html').hasClass('lg-on')) {
      disablePageScroll();
    } else {
      clearQueueScrollLocks();
      enablePageScroll();
    }
  });
}
gallery();