import variables from './variables';

let lang = variables.language;

const about = document.querySelector('#about');

const aboutStructure = `
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="title">${lang('About Us', 'Acerca de Nosotros')}</h1>
      </div>
      <div class="content">
        <div class="about">

          <div class="about-item">
            <div class="about-us">
              <p class="about-us-content">${lang('We believe in creation, by using logical and ordered processes that generate a final result which fulfills expectations.', 'Creemos en la creación, utilizando procesos lógicos y ordenados para que el resultado final sea satisfactorio.')}</p>
              <div class="about-us-items">
                <div class="about-us-item">
                  <img src="./assets/images/about/systems-and-architecture-sergio-perez.jpg" alt="${variables.name} | Sergio Pérez" class="about-us-image" data-aos="zoom-in-up">
                  <p class="about-us-name">Sergio Pérez</p>
                  <p class="about-us-quote">${lang('I like to do serious business...', 'Me gusta hacer negocios serios...')}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="about-item">
            <div class="about-items">

              <div class="item">
                <img src="./assets/images/about/systems-and-architecture-about-mission.svg" alt="${variables.name} ${lang('Mission', 'Misión')}" class="item-image" data-aos="zoom-in-up">
                <h2 class="item-title">${lang('Mission', 'Misión')}</h2>
                <p class="item-description">${lang('To plan, design, develop, test, and publish websites and web applications for businesses or individuals.', 'Planificar, diseñar, desarrollar, probar y publicar sitios o aplicaciones web, para negocios o personas individuales.')}</p>
              </div>

              <div class="item">
                <img src="./assets/images/about/systems-and-architecture-about-vision.svg" alt="${variables.name} ${lang('Vision', 'Visión')}" class="item-image" data-aos="zoom-in-up">
                <h2 class="item-title">${lang('Vision', 'Visión')}</h2>
                <p class="item-description">${lang('To be pioneers in the implementation of top level smart solutions, which are results of innovative ideas, that reach the total satisfaction of the final consumer.', 'Ser pioneros en la implementación de soluciones inteligentes de primer nivel, resultado de ideas innovadoras, que alcancen la satisfacción total del consumidor final.')}</p>
              </div>

              <div class="item">
                <img src="./assets/images/about/systems-and-architecture-about-objectives.svg" alt="${variables.name} ${lang('Objectives', 'Objetivos')}" class="item-image" data-aos="zoom-in-up">
                <h2 class="item-title">${lang('Objectives', 'Objetivos')}</h2>
                <p class="item-description">${lang('To develop multi-platform projects based on web technologies, which can be adjusted to the client\'s work methods, and running within a short period of time.', 'Elaborar proyectos multi-plataforma basados en tecnología web, dichos proyectos seran adaptados al sistema de trabajo del cliente y seran puestos en funcionamiento en un corto plazo.')}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
`;

if (about) {
  about.innerHTML = aboutStructure;
}