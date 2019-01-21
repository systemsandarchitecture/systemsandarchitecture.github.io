import variables from './variables';

let language =  variables.language;

const services =  document.querySelector('#services');

const servicesStructure = `
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="title">${language('Services', 'Servicios')}</h1>
      </div>
      <div class="content">
        <div class="services"></div>
      </div>
    </div>
  </div>
`;

if (services) {
  services.innerHTML = servicesStructure;

  const servicesClass = document.querySelector('.services');

  const servicesEnglish = variables.servicesPage.english;
  const servicesSpanish = variables.servicesPage.spanish;

  let servicesItem = '';

  for (let i = 0, j = 0; i < servicesEnglish.length, j < servicesSpanish.length; i++, j++) {

    servicesItem += `
      <div class="services-item">
        <i class="${language(servicesEnglish[i].image, servicesSpanish[j].image)} item-icon" data-aos="zoom-in-up"></i>
        <h2 class="item-name">${language(servicesEnglish[i].name, servicesSpanish[j].name)}</h2>
        <p class="item-description">${language(servicesEnglish[i].description, servicesSpanish[j].description)}</p>
        <a href="#contact" class="item-contact" data-aos="zoom-in-up">${language('let us help you', 'contáctanos')}<i class="fas fa-chevron-right item-contact-icon"></i>
        </a>
      </div>
      <script type="application/ld+json">
      { "@context": "http://schema.org",
        "@type": "Service",
        "name": "${language(servicesEnglish[i].name, servicesSpanish[j].name)}" }
      </script>
    `;
  }
  servicesClass.innerHTML = servicesItem;
}
