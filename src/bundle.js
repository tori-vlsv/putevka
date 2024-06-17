import 'lightgallery/css/lightgallery-bundle.css';
import 'lightgallery/css/lightgallery.css';
import 'jquery-ui/themes/base/all.css';


import 'swiper/css/bundle';
import 'swiper/css';

import "./assets/styles/app.scss";


if (module.hot) {
  module.hot.accept();
}

$(function () {
  require("js/app");
});