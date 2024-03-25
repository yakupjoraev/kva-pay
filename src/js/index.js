// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});


// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
import accordion from "./modules/accordion.js";
import trustedSlider from "./modules/trusted-slider.js";
import currenciesSlider from "./modules/currencies-slider.js";

mobileNav();
accordion();
trustedSlider();
currenciesSlider();
