import variables from './variables';

const navbarIconBackground = document.querySelector('.navbar-icon-background');
const navbarMenu = document.querySelector('#navbar-menu');
const smallPhoneMax = window.matchMedia('(max-width: 374px)');
const phabletMax = window.matchMedia('(max-width: 767px)');
const laptopMax =  window.matchMedia('(max-width: 1199px)');
const tabletMin = window.matchMedia('(min-width: 768px)');
const desktopMin = window.matchMedia('(min-width: 1200px)');

// event listener for the navbar icon background
navbarIconBackground.addEventListener('click', toggleNavbarIcon)

// toggling the navbar icon
function toggleNavbarIcon() {
  if (navbarIconBackground.classList.contains('navbar-open')) {
    openNavbar();
  } else if (navbarIconBackground.classList.contains('navbar-close')) {
    closeNavbar();
  }
}

// if navbar menu exists
if (navbarMenu) {
  navbarMenu.addEventListener('click', closeNavbar);
}

// opening the navbar menu
function openNavbar() {
  navbarIconBackground.classList.add('navbar-close');
  navbarIconBackground.classList.remove('navbar-open');
  document.querySelector('.menu-icon-open').remove();
  navbarIconBackground.innerHTML = variables.menuIconClose;
  if (smallPhoneMax.matches) {
    navbarMenu.style.top = '60px';
  } else if (phabletMax.matches) {
    navbarMenu.style.top = '72px';
  } else if (laptopMax.matches) {
    navbarMenu.style.top = '84px';
  } else if (desktopMin.matches) {
    navbarMenu.style.top = '96px';
  }
}

// closing the navbar menu
function closeNavbar() {
  navbarIconBackground.classList.add('navbar-open');
  navbarIconBackground.classList.remove('navbar-close');
  document.querySelector('.menu-icon-close').remove();
  navbarIconBackground.innerHTML = variables.menuIconOpen;
  navbarMenu.removeAttribute('style');
}

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('navbar-special');
  } else {
    navbar.classList.remove('navbar-special');
  }
});

console.log('Created by Systems & Architecture'+'\n'+'https://systemsandarchitecture.com/');
