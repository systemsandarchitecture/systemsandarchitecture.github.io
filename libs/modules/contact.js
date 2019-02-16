import variables from './variables';

let language = variables.language;

const contact = document.querySelector('#contact');

const contactStructure = `
  <div class="top-right white"></div>
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="title">${language('Contact Us', 'Cont&aacute;ctanos')}</h1>
      </div>
      <div class="content">
        <div class="contact">
          <div id="contact-form">
            <form action="https://formspree.io/${variables.email}" method="POST" class="contact-form">
              <div class="contact-form-header">
                <i class="${variables.contactFormIcon} contact-form-header-icon" data-aos="zoom-in-up"></i>
                <p class="contact-form-header-text">${language('please fill out the form below, we will contact you as soon as possible', 'por favor llena la siguiente forma, nos pondremos en contacto lo m&aacute;s pronto posible')}</p>
              </div>
              <div class="form-group">
                <label for="contact-name">${language('Name', 'Nombre')}:</label>
                <input type="text" id="contact-name" placeholder="${language('Full Name', 'Nombre Completo')}" name="${language('Name', 'Nombre')}">
              </div>
              <div class="form-group-inline">
                <div class="form-group">
                  <label for="contact-phone">${language('Phone', 'Tel&eacute;fono')}:</label>
                  <input type="tel" id="contact-phone" placeholder="XXX-XXX-XXXX" name="${language('Phone', 'Tel&eacute;fono')}">
                </div>
                <div class="form-group">
                  <label for="contact-email">${language('Email', 'Correo Electr&oacute;nico')}:</label>
                  <input type="email" id="contact-email" placeholder="${language('your-email@example.com', 'tu-email@ejemplo.com')}" name="${language('Email', 'Correo Electr&oacute;nico')}">
                </div>
              </div>
              <div class="form-group">
                <label>${language('How do you prefer to be contacted?', '&iquest;Com&oacute; prefieres ser contactado(a)?')}</label>
                <div class="radio">
                  <label>
                    <input type="radio" value="${language('Phone Call', 'Llamada')}" name="${language('Prefered Contacted Way', 'Prefiero ser Contactado por')}">
                    <span>${language('Phone Call', 'Llamada')}</span>
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" value="${language('Text Message', 'Mensaje de Texto')}" name="${language('Prefered Contacted Way', 'Prefiero ser Contactado por')}">
                    <span>${language('Text Message', 'Mensaje de Texto')}</span>
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" value="WhatsApp" name="${language('Prefered Contacted Way', 'Prefiero ser Contactado por')}">
                    <span>WhatsApp</span>
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" value="${language('Email', 'Correo Electr&oacute;nico')}" name="${language('Prefered Contacted Way', 'Prefiero ser Contactado por')}">
                    <span>${language('Email', 'Correo Electr&oacute;nico')}</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label>${language('What service can we offer you?', '&iquest;Qu&eacute; servicio podemos ofrecerte?')}</label>
                <select id="contact-services" name="${language('Service', 'Servicio')}"></select>
              </div>
              <div class="form-group">
                <label for="contact-message">${language('Message', 'Mensaje')}:</label>
                <textarea  id="contact-message" placeholder="${language('Tell us, how can we help you?', 'Dinos, &iquest;Com&oacute; podemos servirte?')}" rows="4" name="${language('Message', 'Mensaje')}"></textarea>
              </div>
              <div class="form-group form-buttons">
                <button type="reset" value="Reset">${language('Reset', 'Borrar')}</button>
                <button type="submit" value="Submit">${language('Submit', 'Enviar')}</button>
              </div>
              <input type="hidden" name="_next" value="${variables.domain}${language('thank-you', 'gracias')}.html">
            </form>
          </div>
          <div class="contact-items">
            <a href="tel:${variables.phoneLink}" class="contact-item">
              <i class="${variables.phoneIcon} contact-icon" data-aos="zoom-in-up"></i>
              <p class="contact-text">${language('phone', 'tel&eacute;fono')}</p>
              <p class="contact-detail">${variables.phone}</p>
            </a>
            <a href="sms:${variables.phoneLink}" class="contact-item">
              <i class="${variables.smsIcon} contact-icon" data-aos="zoom-in-up"></i>
              <p class="contact-text">${language('text message', 'mensaje de texto')}</p>
              <p class="contact-detail">${variables.phone}</p>
            </a>
            <a href="https://api.whatsapp.com/send?phone=${variables.whatsappLink}" target="_blank" class="contact-item">
              <i class="${variables.whatsappIcon} contact-icon" data-aos="zoom-in-up"></i>
              <p class="contact-text">whatsapp</p>
              <p class="contact-detail">${variables.phone}</p>
            </a>
            <a href="mailto:${variables.email}" class="contact-item">
              <i class="${variables.emailIcon} contact-icon" data-aos="zoom-in-up"></i>
              <p class="contact-text">${language('email', 'correo electr&oacute;nico')}</p>
              <p class="contact-detail email">${variables.email}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

if (contact) {
  contact.innerHTML = contactStructure;

  const contactServices =  document.querySelector('#contact-services');

  const servicesEnglish = variables.servicesPage.english;
  const servicesSpanish = variables.servicesPage.spanish;

  let contactService = `
    <option value="${language('Please, select a service...', 'Por favor, selecciona un servicio...')}" selected disabled>${language('Please, select a service...', 'Por favor, selecciona un servicio...')}</option>
  `;

  for (let i = 0, j = 0; i < servicesEnglish.length, j < servicesSpanish.length; i++, j++) {

    contactService += `
      <option value="${language(servicesEnglish[i].name, servicesSpanish[j].name)}">${language(servicesEnglish[i].name, servicesSpanish[j].name)}</option>
    `;
  }
  contactServices.innerHTML = contactService;
}

