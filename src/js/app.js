import $ from 'jquery';
import { ScrollSpy } from 'bootstrap';
import mobileMenu from './modules/mobileMenu';
import navbarScroll from './modules/navbarScroll';

$(() => {
  // eslint-disable-next-line no-new
  new ScrollSpy(document.body, {
    target: '#navbar-example',
  });

  mobileMenu.init();
  navbarScroll.init();
});
