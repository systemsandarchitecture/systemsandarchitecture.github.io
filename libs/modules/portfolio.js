import variables from './variables';

let lang =  variables.language;

const portfolio = document.querySelector('#portfolio');

let portfolioStructure = `
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="title">${lang('Portfolio', 'Portafolio')}</h1>
      </div>
      <div class="portfolio">

        <div class="portfolio-item">
          <div class="portfolio-title">
            <h2 class="title">${lang('Networking Services', 'Cableado Estructurado')}</h2>
          </div>
          <div class="networking-services"></div>
        </div>

        <div class="portfolio-item">
          <div class="portfolio-title">
            <h2 class="title">${lang('Security Systems', 'S&iacute;stemas de Seguridad')}</h2>
          </div>
          <div class="security-services"></div>
        </div>

      </div>
    </div>
  </div>
`;

if (portfolio) {
  portfolio.innerHTML = portfolioStructure;

  // web design
  const webDesignClass =  document.querySelector('.web-design');

  function getWebPortfolio() {
    fetch(variables.spreadsheetUrl(variables.portfolio))
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayWebPortfolio(data);
    });
  }
  getWebPortfolio();

  function displayWebPortfolio(data) {

    let webPortfolio = data.values;

    for (let i in webPortfolio) {
      let webPortfolioName = webPortfolio[i][0];
      let webPortfolioUrl = webPortfolio[i][1];
      let webPortfolioImage = webPortfolio[i][2];

      webPorfolioItems(webPortfolioName, webPortfolioUrl, webPortfolioImage);
    }

    function webPorfolioItems(webPortfolioName, webPortfolioUrl, webPortfolioImage) {
      let webDesignItem = `
        <div class="web-design-item">
          <div class="item-image-container">
            <img src="./assets/images/portfolio/web-design/${webPortfolioImage}.png" alt="${variables.name} | ${webPortfolioName}" class="item-image" data-aos="zoom-in-up">
          </div>
          <h3 class="item-name">${webPortfolioName}</h3>
          <a href="${webPortfolioUrl}" target="_blank" rel="noopener" class="item-url" data-aos="zoom-in-up">${lang('check out their website', 'revisa su p&aacute;gina web')}</a>
        </div>
      `;
      webDesignClass.innerHTML += webDesignItem;
    }
  }
}
