import variables from './variables';
import {servicesTitle, servicesClass} from './services';
import {portfolioTitle, portfolioClass} from './portfolio';

let language = variables.language;

const windowPathname =  window.location.pathname.split('/').pop();

// data url
const dataUrl = './assets/data/data.json';

// getting data
if (windowPathname === '' || windowPathname === 'index.html' || windowPathname === 'espanol.html') {

  function getData() {
    fetch(dataUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (variables.english) {
        displayData(data[0]);
      } else if (variables.spanish) {
        displayData(data[1]);
      }
    });
  }
  getData();
}

// displaying data
function displayData(pages) {

  // looping the pages
  for (let i in pages) {

    let page = pages[i];

    // looping a specific page
    for (let j in page) {

      let pageId = page[j].page_id;
      let pageName = page[j].page_name;
      let pageItems = page[j].page_items;

      if (pageId === 'services') {
        servicesTitle.textContent = pageName;
        displayServices(pageItems);
      }
      if (pageId === 'portfolio') {
        portfolioTitle.textContent = pageName;
        displayPortfolio(pageItems);
      }
    }
  }
}

// displaying services items
function displayServices(services) {

  let servicesItem = '';

  for (let i in services) {

    servicesItem += `
      <div class="services-item">
        <i class="${services[i].image} service-icon" data-aos="zoom-in-up"></i>
        <h2>${services[i].name}</h2>
          <p>${services[i].description}</p>
          <a href="#contact" class="services-contact" data-aos="zoom-in-up">${language('let us help you', 'contáctanos')}<i class="fas fa-chevron-right"></i>
          </a>
      </div>
      <script type="application/ld+json">
        { "@context": "http://schema.org",
          "@type": "Service",
          "name": "${services[i].name}" }
      </script>
    `;
  }
  servicesClass.innerHTML = servicesItem;
}

// displaying portfolio items
function displayPortfolio(portfolio) {
  
  let portfolioItem = '';

  for (let i in portfolio) {

    let itemTitle =  portfolio[i].item_title;
    let itemClass =  portfolio[i].item_class;
    let items = portfolio[i].items;
    
    portfolioItem += `
      <div class="portfolio-item">
        <h2 class="item-title">${itemTitle}</h2>
        <div class="item-class ${itemClass}">
    `;

    // web design
    if (itemClass === 'web-design') {

      for (let j in items) {

        portfolioItem += `
          <div class="item">
            <img src="./assets/images/portfolio/${itemClass}/${items[j].image}.png" alt="${items[j].name}" class="image" data-aos="zoom-in-up">
            <div class="opacity"></div>
            <h3 class="name" data-aos="zoom-in-up">${items[j].name}</h3>
            <div class="website">
              <a href="${items[j].url}" target="_blank" rel="noopener" class="url">
                <span>${language('check website', 'revisa su página web')}</span>
                <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        `;
      }
    }

    // web virtual reality
    if (itemClass === 'web-virtual-reality') {

      portfolioItem += `
        <div class="item">
          <a href="./pages/virtual-reality.html" class="gallery">
            <span>${language('Check out the Gallery', 'Revisa la Galeria')}</span>
            <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      `;
    }

    portfolioItem += `
        </div>
      </div>
    `;
  }
  portfolioClass.innerHTML = portfolioItem;
}