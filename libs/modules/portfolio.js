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
            <h2 class="title">${lang('Web Design', 'Dise&ntilde;o Web')}</h2>
          </div>
          <div class="web-design"></div>
        </div>

        <div class="portfolio-item">
          <div class="portfolio-title">
            <h2 class="title">${lang('Web Virtual Reality', 'Realidad Virtual en tu P&aacute;gina Web')}</h2>
          </div>
          <div class="portfolio-description">
            <p class="description">${lang('In your phone, tilt or tap and drag to see around the pictures. In your computer, click and drag on any picture to move around.', 'En tu tel&eacute;fono, muevelo o toca y arrastra para ver alrededor de las im&aacute;genes. En tu computadora, haz clic y arrastra para ver alrededor de las imagenes.')}</p>
          </div>
          <div class="web-virtual-reality"></div>
        </div>

      </div>
    </div>
  </div>
`;

if (portfolio) {
  portfolio.innerHTML = portfolioStructure;

  // web design
  const webDesignClass =  document.querySelector('.web-design');

  const webDesign =  variables.portfolio.webDesign;

  let webDesignItem = '';

  for (let i in webDesign) {

    let name = webDesign[i].name;
    let url = webDesign[i].url;
    let image = webDesign[i].image;

    webDesignItem += `
      <div class="web-design-item">
        <div class="item-image-container">
          <img src="./assets/images/portfolio/web-design/${image}.png" alt="${variables.name} | ${name}" class="item-image" data-aos="zoom-in-up">
        </div>
        <h3 class="item-name">${name}</h3>
        <a href="${url}" target="_blank" rel="noopener" class="item-url" data-aos="zoom-in-up">${lang('check out their website', 'revisa su p&aacute;gina web')}</a>
        </div>
      </div>
    `;
  }
  webDesignClass.innerHTML = webDesignItem;
  
  // web virtual reality
  const webVirtualRealityClass =  document.querySelector('.web-virtual-reality');

  const webVirtualReality =  variables.portfolio.webVirtualReality;

  let webVirtualRealityItem = '';

  for (let j in webVirtualReality) {

    webVirtualRealityItem += `
    <div class="web-virtual-reality-item">
      <div class="item-image">
        <iframe width="100%" height="100%" allowfullscreen="yes" scrolling="no" allowvr="yes" src="./views/${webVirtualReality[j].url}.html" frameborder="0"></iframe>
      </div>
      <div class="item-title">
        <h3 class="title">${webVirtualReality[j].name}</h3>
      </div>
    </div>
    `;
  }
  webVirtualRealityClass.innerHTML = webVirtualRealityItem;
}
