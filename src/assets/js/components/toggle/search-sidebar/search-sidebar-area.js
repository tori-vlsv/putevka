
import slider from 'jquery-ui/ui/widgets/slider'

function searchSidebarArea() {
  function prettify(num) {
    let n = num.toString();
    let separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}
  $(".search-sidebar__area").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [ 0, 1000 ],
    slide: function( event, ui ) {
      $( ".search-sidebar__area--from" ).val(prettify(ui.values[0]));
      $( ".search-sidebar__area--to" ).val(prettify(ui.values[1]));
    }
  });
};
searchSidebarArea();