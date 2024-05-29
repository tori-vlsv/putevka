import { disablePageScroll, enablePageScroll } from "scroll-lock";

function howToBookPopup() {
  let buttons = $('.how-to-book-inner-video__button');
  let popup = $('.how-to-book-popup');
  let container = $('.how-to-book-popup__video');
  let close = $('.how-to-book-popup__close');
  let youtubePlayer = $('.youtube-player');


  Array.from(buttons).forEach(function(el) {
    $(el).on('click', function() {
      popup.addClass('active');
      disablePageScroll();

      youtubePlayer.attr(
        "src",
        "https://www.youtube.com/embed/2cXbSra6hAk?enablejsapi=1"
      );

    });
  });
  
  close.on('click', function() {
    popup.removeClass('active');
    enablePageScroll();
    if(youtubePlayer) {
      youtubePlayer.get(0).contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    }
  });

  $(document).mouseup( function(e){
		if ( popup.hasClass('active') && !container.is(e.target) && container.has(e.target).length === 0 ) { 
      popup.removeClass('active');
      enablePageScroll();
      if(youtubePlayer) {
        youtubePlayer.get(0).contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
      }
		}
	});
}
howToBookPopup();