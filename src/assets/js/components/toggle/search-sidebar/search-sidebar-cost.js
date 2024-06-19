
import slider from 'jquery-ui/ui/widgets/slider'

function searchSidebarArea() {
  function prettify(num) {
    let n = num.toString();
    let separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}
  $(".search-sidebar__toggle").slider({
    range: true,
    min: 0,
    max: 11000,
    values: [ 500, 11000 ],
    slide: function( event, ui ) {
      $( ".search-sidebar__cost--from" ).val(prettify(ui.values[0]));
      $( ".search-sidebar__cost--to" ).val(prettify(ui.values[1]));
    }
  });
};
searchSidebarArea();