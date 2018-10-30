// variables for the header
const navbarIcon = document.querySelector('.navbar-icon');
const pathOne =  document.querySelector('.path-one');
const pathTwo =  document.querySelector('.path-two');
const pathThree =  document.querySelector('.path-three');
const navbarMenu = document.querySelector('#navbar-menu');
const smallPhoneMax = window.matchMedia('(max-width: 374px)');
const phabletMax = window.matchMedia('(max-width: 767px)');
const laptopMax =  window.matchMedia('(max-width: 1199px)');
const desktopMin = window.matchMedia('(min-width: 1200px)');
// event listener for the navbar icon
navbarIcon.addEventListener('click', toggleNavbarIcon)
// if navbar menu exists
if (navbarMenu) {
  navbarMenu.addEventListener('click', closeNavbar);
}
// toggling the navbar icon
function toggleNavbarIcon() {
  if (navbarIcon.classList.contains('navbar-open')) {
    openNavbar();
  } else {
    closeNavbar();
  }
}
// opening the navbar menu
function openNavbar() {
  if (smallPhoneMax.matches) {
    navbarMenu.style.top = '60px';
  } else if (phabletMax.matches) {
    navbarMenu.style.top = '72px';
  } else if (laptopMax.matches) {
    navbarMenu.style.top = '84px';
  } else if (desktopMin.matches) {
    navbarMenu.style.top = '96px';
  }
  pathOne.setAttribute('d', 'M 0,0 24,24');
  pathTwo.classList.add('hidden');
  pathThree.setAttribute('d', 'M 0,24 24,0');
  navbarIcon.classList.add('navbar-close');
  navbarIcon.classList.remove('navbar-open');
}
// closing the navbar menu
function closeNavbar() {
  navbarMenu.removeAttribute('style');
  // navbarMenu.style.top = '-100%';
  pathOne.setAttribute('d', 'M 0,6 24,6');
  pathTwo.classList.remove('hidden');
  pathThree.setAttribute('d', 'M 0,18 24,18');
  navbarIcon.classList.add('navbar-open');
  navbarIcon.classList.remove('navbar-close');
}
