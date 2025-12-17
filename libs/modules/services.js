import variables from './variables';

let lang = variables.language;

const services = document.querySelector('#services');

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

  function getCategories() {
    fetch(variables.spreadsheetUrl(variables.servicesCategories))
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayCategories(data);
    });
  }
  getCategories();

  function displayCategories(data) {

    let categories =  data.values;

    for (let i in categories) {
      let categoryTitle = categories[i][0];
      let categoryTitleSpa = categories[i][1];
      let categoryName = categories[i][2];

      category(categoryTitle, categoryTitleSpa, categoryName);
    }

    function category(categoryTitle, categoryTitleSpa, categoryName) {
      let servicesItem = `
        <div class="services-item">
          <div class="item-title">
            <h2 class="title">${lang(categoryTitle, categoryTitleSpa)}</h2>
          </div>
          <div class="services-items ${categoryName}"></div>
        </div>
      `;
      servicesClass.innerHTML += servicesItem;
      displayCategory(categoryName);
    }
  }
  function displayCategory(categoryName) {

    function getServices() {
      fetch(variables.spreadsheetUrl(variables.services))
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayServices(data);
      });
    }
    getServices();

    function displayServices(data) {
      
      let services = data.values;

      for (let i in services) {
        let name = services[i][0];
        let nameSpa = services[i][1];
        let description = services[i][2];
        let descriptionSpa = services[i][3];
        let image = services[i][4];
        let category = services[i][5];
        
        service(name, nameSpa, description, descriptionSpa, image, category);
      }

      function service(name, nameSpa, description, descriptionSpa, image, category) {
        let serviceItem = `
          <div class="service-item">
            <div class="item-image-container">
              <!-- <img src="./assets/images/services/systems-and-architecture-${image}.svg" alt="${variables.name} ${lang(name, nameSpa)}" class="item-image" data-aos="zoom-in-up"> -->
            </div>
            <h3 class="item-name">${lang(name, nameSpa)}</h3>
            <p class="item-description">${lang(description, descriptionSpa)}</p>
          </div>
          <script type="application/ld+json">
            { "@context": "http://schema.org",
              "@type": "Service",
              "name": "${lang(name, nameSpa)}",
              "description": "${lang(description, descriptionSpa)}",
              "image": "https://systemsandarchitecture.com/assets/images/services/systems-and-architecture-${image}.svg",
              "brand": "${variables.name}"
            }
          </script>
        `;
        if (categoryName === category) {
          document.querySelector('.'+category+'').innerHTML += serviceItem;
        }
      }
    }
  }
}