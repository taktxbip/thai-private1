'strict';
const $ = require('jquery');
window.jQuery = $;
window.$ = $;

import { Fancybox } from "@fancyapps/ui";
import Markup from './js/Markup';
import photos from './js/photos.json';
import words from './js/words.json';

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import './scss/main.scss';
import './js/assets';

(function () {

  window.addEventListener('DOMContentLoaded', () => {

    const m = new Markup(photos, words);
    m.draw();

    Fancybox.bind("[data-fancybox]", {});

  });

})();