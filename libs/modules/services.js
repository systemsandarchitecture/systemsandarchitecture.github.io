import variables from './variables';

let lang =  variables.language;

const services =  document.querySelector('#services');

const servicesStructure = `
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="title">${lang('Our Services', 'Nuestros Servicios')}</h1>
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

  const servicesEnglish = variables.services.english;
  const servicesSpanish = variables.services.spanish;

  let servicesItem = '';

  for (let i = 0, j = 0; i < servicesEnglish.length, j < servicesSpanish.length; i++, j++) {

    let nameEng = servicesEnglish[i].name;
    let nameSpa = servicesSpanish[j].name;
    let descriptionEng = servicesEnglish[i].description;
    let descriptionSpa = servicesSpanish[j].description;
    let imageEng = servicesEnglish[i].image;
    let imageSpa = servicesSpanish[j].image;

    servicesItem += `
      <div class="services-item">
        <div class="item-image-container">
          <img src="./assets/images/services/systems-and-architecture-${lang(imageEng, imageSpa)}.svg" alt="${variables.name} ${lang(nameEng, nameSpa)}" class="item-image" data-aos="zoom-in-up">
        </div>
        <h2 class="item-name">${lang(nameEng, nameSpa)}</h2>
        <p class="item-description">${lang(descriptionEng, descriptionSpa)}</p>
        <a href="#contact" class="item-contact" data-aos="zoom-in-up">${lang('Contact Us...', 'Contáctanos...')}</a>
      </div>
      <script type="application/ld+json">
      { "@context": "http://schema.org",
        "@type": "Service",
        "name": "${lang(nameEng, nameSpa)}",
        "description": "${lang(descriptionEng, descriptionSpa)}",
        "image": "https://systemsandarchitecture.com/assets/images/services/systems-and-architecture-${lang(imageEng, imageSpa)}.svg",
        "brand": "${variables.name}"
      }
      </script>
    `;
  }
  servicesClass.innerHTML = servicesItem;
}
