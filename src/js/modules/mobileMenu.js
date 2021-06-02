const mobileMenu = (function x() {
  const nav = document.querySelector('#body');
  const menu = document.querySelector('#menu');
  const menuToggle = document.querySelector('.nav-toggle');
  let isMenuOpen = false;

  function init() {
    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      isMenuOpen = !isMenuOpen;

      menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
      menu.hidden = !isMenuOpen;
      nav.classList.toggle('nav--open');
    });
  }
  return {
    init,
  };
}());
export default mobileMenu;
