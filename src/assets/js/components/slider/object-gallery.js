import lightGallery from "lightgallery";
import lgPager from 'lightgallery/plugins/pager'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from "scroll-lock";

function objectGallery() {
  let galleries = $('.object-gallery__images');
  Array.from(galleries).forEach(function(gallery) {
    lightGallery(gallery, {
      licenseKey: 'UNLICENSED',
      controls: true,
      lgThumbnail: true,
      plugins: [lgPager, lgThumbnail]
    });
  });
  $('.lg-outer, .object-gallery__slider .swiper-slide').on('click', function() {
    if ($('html').hasClass('lg-on')) {
      disablePageScroll();
    } else {
      clearQueueScrollLocks();
      enablePageScroll();
    }
  });
}
objectGallery();