const scroll = (() => {
  function init() {
    function navbarScroll() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar').style.height = '66px';
        document.getElementById('nav').style.borderBottom = '1px solid rgba(129,111,111,.1)';
        document.getElementById('logo').style.width = '145px';
      } else {
        document.getElementById('navbar').style.height = '96px';
        document.getElementById('nav').style.borderBottom = '1px solid transparent';
        document.getElementById('logo').style.width = '161px;';
      }
    }
    window.onscroll = () => {
      navbarScroll();
    };
  }
  return {
    init,
  };
})();

export default scroll;
