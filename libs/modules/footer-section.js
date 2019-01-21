import variables from './variables';

let language = variables.language;

const footerSection =  document.querySelector('#footer-section');

const footerSectionStructure = `
  <div class="container">
    <div class="row">
      <div class="content">
        <div class="footer-social">
          <h4 class="social-title">${language('follow us', 's&iacute;guenos')}</h4>
          <div class="social-icons">
            <a href="${variables.twitter}" target="_blank" data-aos="zoom-in-up">
              <i class="${variables.twitterIcon}"></i>
            </a>
            <a href="${variables.instagram}" target="_blank" data-aos="zoom-in-up">
              <i class="${variables.instagramIcon}"></i>
            </a>
            <a href="${variables.facebook}" target="_blank" data-aos="zoom-in-up">
              <i class="${variables.facebookIcon}"></i>
            </a>
          </div>
        </div>
        <hr>
        <div class="footer-bottom">
          <p>&copy; 2015-<span id="year"></span> <a href="./">${variables.legalName}</a></p>
          <p class="trademark">${language('All other trademarks or registered trademarks are property of their respective owners.', 'Todas las marcas y marcas registradas son propiedad de sus respectivos due&ntilde;os.')}</p>
        </div>
      </div>
    </div>
  </div>
`;

if (footerSection) {
  footerSection.innerHTML = footerSectionStructure;

  let year = new Date();

  document.querySelector('#year').textContent = year.getFullYear();
}
