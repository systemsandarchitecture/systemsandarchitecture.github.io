import variables from './variables';

let language =  variables.language;

const portfolio = document.querySelector('#portfolio');

const portfolioStructure = `
  <div class="top-right gray"></div>
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="title">${language('Portfolio', 'Portafolio')}</h1>
      </div>
      <div class="content">
        <div class="portfolio">
          <div class="portfolio-item">
            <div class="portfolio-title">
              <h2 class="title">${language('Web Design', 'Dise&ntilde;o Web')}</h2>
            </div>
            <div class="web-design"></div>
          </div>
          <div class="portfolio-item">
            <div class="portfolio-title">
              <h2 class="title">${language('Web Virtual Reality', 'Realidad Virtual en tu P&aacute;gina Web')}</h2>
            </div>
            <div class="portfolio-description">
              <p class="description">${language('tilt your phone or tap and drag to see around the pictures', 'click and drag on any picture to move around')}</p>
            </div>
            <div class="web-virtual-reality"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

if (portfolio) {
  portfolio.innerHTML = portfolioStructure;

  const webDesignClass =  document.querySelector('.web-design');

  const webDesign =  variables.portfolioPage.webDesign;

  let webDesignItem = '';

  for (let i in webDesign) {

    webDesignItem += `
      <div class="web-design-item">
        <div class="item-image">
          <img src="./assets/images/portfolio/web-design/${webDesign[i].image}.png" alt="${variables.name} | ${webDesign[i].name}" class="image" data-aos="zoom-in-up">
        </div>
        <div class="item-opacity"></div>
        <div class="item-name">
          <h3 class="name">${webDesign[i].name}</h3>
        </div>
        <div class="item-url">
          <a href="${webDesign[i].url}" target="_blank" rel="noopener" class="url">${language('check out their website', 'revisa su p&aacute;gina web')}<i class="fas fa-chevron-right url-icon"></i></a>
        </div>
      </div>
    `;
  }
  webDesignClass.innerHTML = webDesignItem

  const webVirtualRealityClass =  document.querySelector('.web-virtual-reality');

  const webVirtualReality =  variables.portfolioPage.webVirtualReality;

  let webVirtualRealityItem = '';

  for (let j in webVirtualReality) {

    webVirtualRealityItem += `
    <div class="web-virtual-reality-item">
      <iframe width="100%" height="100%" allowfullscreen="yes" scrolling="no" allowvr="yes" src="./views/${webVirtualReality[j].url}.html" frameborder="0"></iframe>
      <div class="item-title">
        <h3 class="title">${webVirtualReality[j].name}</h3>
      </div>
    </div>
    `;
  }
  webVirtualRealityClass.innerHTML = webVirtualRealityItem;
}
