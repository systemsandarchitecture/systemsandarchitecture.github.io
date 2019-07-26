import variables from './variables';

const footer =  document.querySelector('#footer');

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
      <a href="${variables.pinterestLink}" target="_blank" class="bottom-item">
        <div class="bottom-icon-background">${variables.pinterestIcon}</div>
      </a>
      <a href="${variables.facebookLink}" target="_blank" class="bottom-item">
        <div class="bottom-icon-background">${variables.facebookIcon}</div>
      </a>
      <a href="${variables.instagramLink}" target="_blank" class="bottom-item">
        <div class="bottom-icon-background">${variables.instagramIcon}</div>
      </a>
    </div>
  </div>
</div>
`;

if (footer) {
  footer.innerHTML = footerStructure;

  const navbarBottom = document.querySelector('.navbar-bottom');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      navbarBottom.classList.add('navbar-bottom-special');
    } else {
      navbarBottom.classList.remove('navbar-bottom-special');
    }
  });
}