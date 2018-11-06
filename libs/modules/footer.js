import variables from './variables';

let language =  variables.language;

const footer =  document.querySelector('#footer');

const footerStructure = `
  <div class="container">
    <div class="row">
      <div class="navbar-bottom">
        <a href="#contact-form" class="bottom-item">
          <i class="${variables.contactFormIcon} bottom-icon"></i>
          <p class="bottom-text">${language('Message', 'Mensaje')}</p>
        </a>
        <a href="tel:${variables.phoneLink}" class="bottom-item">
          <i class="${variables.phoneIcon} bottom-icon"></i>
          <p class="bottom-text">${language('Call', 'Llamada')}</p>
        </a>
        <a href="https://api.whatsapp.com/send?phone=${variables.whatsappLink}" target="_blank" class="bottom-item">
          <i class="${variables.whatsappIcon} bottom-icon"></i>
          <p class="bottom-text">${language('Whatsapp', 'Whatsapp')}</p>
        </a>
        <a href="${variables.twitter}" target="_blank" class="bottom-item">
          <i class="${variables.twitterIcon} bottom-icon"></i>
          <p class="bottom-text">${language('Follow', 'Sigu&eacute;nos')}</p>
        </a>
        <a href="${variables.facebook}" target="_blank" class="bottom-item">
          <i class="${variables.facebookIcon} bottom-icon"></i>
          <p class="bottom-text">${language('Like', 'Gusta')}</p>
        </a>
        <a href="${variables.instagram}" target="_blank" class="bottom-item">
          <i class="${variables.instagramIcon} bottom-icon"></i>
          <p class="bottom-text">${language('Follow', 'Sigu&eacute;nos')}</p>
        </a>
      </div>
    </div>
  </div>
`;

if (footer) {
  footer.innerHTML = footerStructure;
}

const navbarBottom = document.querySelector('.navbar-bottom');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbarBottom.classList.add('navbar-bottom-special');
  } else {
    navbarBottom.classList.remove('navbar-bottom-special');
  }
});