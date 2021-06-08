const mobileMenu = (() => {
  const { body } = document;
  const menu = document.querySelector('#menu');
  const menuToggle = document.querySelector('.menu-toggle');
  const links = menu.querySelectorAll('a');
  let isMenuOpen = false;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  function toggleNavbar() {
    isMenuOpen = !isMenuOpen;

    menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
    body.style.overflow = isMenuOpen ? 'hidden' : null;
    menu.hidden = !isMenuOpen;
  }

  function init() {
    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggleNavbar();
    });

    if (!isMobile) return;

    [...links].forEach((link) => {
      link.addEventListener('click', () => {
        toggleNavbar();
      });
    });
  }
  return {
    init,
  };
})();

export default mobileMenu;
