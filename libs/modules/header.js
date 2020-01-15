const navbar = document.querySelector('.navbar');

const home = document.querySelector('#home');

if (home) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      navbar.classList.add('navbar-special');
    } else {
      navbar.classList.remove('navbar-special');
    }
  });
}
