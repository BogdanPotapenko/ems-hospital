import $ from 'jquery';

import MicroModal from 'micromodal';
import mobileMenu from './modules/mobileMenu';

$(() => {
  MicroModal.init();
  mobileMenu.init();
});
