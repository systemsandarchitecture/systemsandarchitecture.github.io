const servicesPage =  document.querySelector('#services');

// services structure
const servicesStructure = `
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="services-title"></h1>
      </div>
      <div class="content">
        <div class="services"></div>
      </div>
    </div>
  </div>
`;

// insert services structure in page
if (servicesPage) {
  servicesPage.innerHTML = servicesStructure;
}

// services title
export const servicesTitle = document.querySelector('.services-title');

// services class
export const servicesClass = document.querySelector('.services');

