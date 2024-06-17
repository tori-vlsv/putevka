
import slider from 'jquery-ui/ui/widgets/slider'

function searchSidebarToggle() {
  function prettify(num) {
    let n = num.toString();
    let separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}
  $(".search-sidebar__toggle").slider({
    range: true,
    min: 0,
    max: 30000,
    values: [ 500, 11000 ],
    slide: function( event, ui ) {
      $( ".from" ).val(prettify(ui.values[0]));
      $( ".to" ).val(prettify(ui.values[1]));
    }
  });
};
searchSidebarToggle();