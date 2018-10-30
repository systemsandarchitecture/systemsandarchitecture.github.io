import variables from './variables';

let language = variables.language;

const footerSection =  document.querySelector('#footer');

const footerSectionStructure = `
  <div class="container">
    <div class="row">
      <div class="content">
        <div class="footer-social">
          <h4 class="social-title">${language('follow us', 'síguenos')}</h4>
          <div class="social-icons">
            <a href="https://twitter.com/sysandarc/" target="_blank" data-aos="zoom-in-up"><i class="fab fa-twitter-square"></i></a>
            <a href="https://www.instagram.com/sysandarc/" target="_blank" data-aos="zoom-in-up"><i class="fab fa-instagram"></i></a>
            <a href="https://facebook.com/sysandarc/" target="_blank" data-aos="zoom-in-up"><i class="fab fa-facebook-square"></i></a>
          </div>
        </div>
        <hr>
        <div class="footer-bottom">
          <p>&copy; <span id="year"></span> <a href="./">Systems & Architecture LLC</a></p>
          <p class="trademark">${language('All other trademarks or registered trademarks are property of their respective owners.', 'Todas las marcas y marcas registradas son propiedad de sus respectivos dueños.')}</p>
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
