import variables from './variables';

const footer = document.querySelector('#footer');

const footerStructure = `
  <div class="container">
    <div class="row">
      <div class="navbar-bottom">
        <a href="#contact" class="bottom-item">
          <div class="bottom-icon-background">${variables.contactFormIcon}</div>
        </a>
        <a href="${variables.whatsappLink}" target="_blank" class="bottom-item">
          <div class="bottom-icon-background">${variables.whatsappIcon}</div>
        </a>
        <a href="${variables.phoneLink}" class="bottom-item">
          <div class="bottom-icon-background">${variables.phoneIcon}</div>
        </a>
        <a href="${variables.facebookLink}" target="_blank" class="bottom-item">
          <div class="bottom-icon-background">${variables.facebookIcon}</div>
        </a>
        <a href="${variables.instagramLink}" target="_blank" class="bottom-item">
          <div class="bottom-icon-background">${variables.instagramIcon}</div>
        </a>
        <div class="bottom-item">
          <div class="bottom-icon-background navbar-icon-menu navbar-open">${variables.menuIconOpen}</div>
        </div>
      </div>
    </div>
  </div>
`;

if (footer) {
  footer.innerHTML = footerStructure;

  const navbarIconMenu = document.querySelector('.navbar-icon-menu');
  const navbarMenu = document.querySelector('#navbar-menu');
  const smallPhoneMax = window.matchMedia('(max-width: 374px)');
  const phabletMax = window.matchMedia('(max-width: 767px)');
  const laptopMax =  window.matchMedia('(max-width: 1199px)');
  const tabletMin = window.matchMedia('(min-width: 768px)');
  const desktopMin = window.matchMedia('(min-width: 1200px)');

  // event listener for the navbar icon background
  navbarIconMenu.addEventListener('click', toggleNavbarIcon)

  // toggling the navbar icon
  function toggleNavbarIcon() {
    if (navbarIconMenu.classList.contains('navbar-open')) {
      openNavbar();
    } else if (navbarIconMenu.classList.contains('navbar-close')) {
      closeNavbar();
    }
  }

  // if navbar menu exists
  if (navbarMenu) {
    navbarMenu.addEventListener('click', closeNavbar);
  }

  // opening the navbar menu
  function openNavbar() {
    navbarIconMenu.classList.add('navbar-close');
    navbarIconMenu.classList.remove('navbar-open');
    document.querySelector('.menu-icon-open').remove();
    navbarIconMenu.innerHTML = variables.menuIconClose;
    navbarMenu.style.bottom = '0';
    // if (smallPhoneMax.matches) {
    //   navbarMenu.style.top = '60px';
    // } else if (phabletMax.matches) {
    //   navbarMenu.style.top = '72px';
    // } else if (laptopMax.matches) {
    //   navbarMenu.style.top = '84px';
    // } else if (desktopMin.matches) {
    //   navbarMenu.style.top = '96px';
    // }
  }

  // closing the navbar menu
  function closeNavbar() {
    navbarIconMenu.classList.add('navbar-open');
    navbarIconMenu.classList.remove('navbar-close');
    document.querySelector('.menu-icon-close').remove();
    navbarIconMenu.innerHTML = variables.menuIconOpen;
    navbarMenu.removeAttribute('style');
  }

  const navbarBottom = document.querySelector('.navbar-bottom');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      navbarBottom.classList.add('navbar-bottom-special');
    } else {
      navbarBottom.classList.remove('navbar-bottom-special');
    }
  });
}