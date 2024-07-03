import lightGallery from "lightgallery";
import lgPager from 'lightgallery/plugins/pager'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from "scroll-lock";

function objectGallery() {
  let galleries = $('.object-description-scheme');
  Array.from(galleries).forEach(function(gallery) {
    lightGallery(gallery, {
      licenseKey: 'UNLICENSED',
      controls: true,
      lgThumbnail: true,
      thumbMargin: 10,
      thumbWidth: 117,
      plugins: [lgPager, lgThumbnail]
    });
  });
  $('.lg-outer, .object-description-scheme__image').on('click', function() {
    if ($('html').hasClass('lg-on')) {
      disablePageScroll();
    } else {
      clearQueueScrollLocks();
      enablePageScroll();
    }
  });
}
objectGallery();