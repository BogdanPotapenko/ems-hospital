import $ from 'jquery';

import MicroModal from 'micromodal';
import mobileMenu from './modules/mobileMenu';
import navbarScroll from './modules/navbarScroll';

$(() => {
  MicroModal.init({
    openTrigger: 'data-custom-open',
    disableScroll: true,
  });

  mobileMenu.init();
  navbarScroll.init();
});
