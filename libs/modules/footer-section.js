import variables from './variables';

let lang = variables.language;

const footerSection =  document.querySelector('#footer-section');

const footerSectionStructure = `
  <div class="container">
    <div class="row">
      <div class="content">
        <hr>
        <div class="footer-bottom">
          <p>&copy; 2015-<span id="year"></span> <a href="${lang(variables.domain, variables.domain+'espanol.html')}">${variables.legalName}</a></p>
          <p class="trademark">${lang('All other trademarks or registered trademarks are property of their respective owners.', 'Todas las marcas y marcas registradas son propiedad de sus respectivos due&ntilde;os.')}</p>
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
