import variables from './variables';

let lang = variables.language;

const contact = document.querySelector('#contact');

const contactStructure = `
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="title">${lang('Contact Us', 'Cont&aacute;ctanos')}</h1>
      </div>
      <div class="content">
        <div class="contact">

          <div class="contact-item">
            <div id="contact-form">
              <form action="https://formspree.io/${variables.email}" method="POST" class="contact-form">
                <div class="contact-form-header">
                  <div class="contact-form-header-icon" data-aos="zoom-in-up">${variables.contactFormIcon}</div>
                  <p class="contact-form-header-text">${lang('please fill out the form below, we will contact you as soon as possible', 'por favor llena la siguiente forma, nos pondremos en contacto lo m&aacute;s pronto posible')}</p>
                </div>
                <div class="form-group">
                  <label for="contact-name">${lang('Name', 'Nombre')}:</label>
                  <input type="text" id="contact-name" placeholder="${lang('Full Name', 'Nombre Completo')}" name="${lang('Name', 'Nombre')}">
                </div>
                <div class="form-group-inline">
                  <div class="form-group">
                    <label for="contact-phone">${lang('Phone', 'Tel&eacute;fono')}:</label>
                    <input type="tel" id="contact-phone" placeholder="XXX-XXX-XXXX" name="${lang('Phone', 'Tel&eacute;fono')}">
                  </div>
                  <div class="form-group">
                    <label for="contact-email">${lang('Email', 'Correo Electr&oacute;nico')}:</label>
                    <input type="email" id="contact-email" placeholder="${lang('your-email@example.com', 'tu-email@ejemplo.com')}" name="${lang('Email', 'Correo Electr&oacute;nico')}">
                  </div>
                </div>
                <div class="form-group">
                  <label>${lang('How do you prefer to be contacted?', '&iquest;Com&oacute; prefieres ser contactado(a)?')}</label>
                  <div class="radio">
                    <label>
                      <input type="radio" value="${lang('Phone Call', 'Llamada')}" name="${lang('Prefered Contacted Way', 'Prefiero ser Contactado por')}">
                      <span>${lang('Phone Call', 'Llamada')}</span>
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input type="radio" value="${lang('Text Message', 'Mensaje de Texto')}" name="${lang('Prefered Contacted Way', 'Prefiero ser Contactado por')}">
                      <span>${lang('Text Message', 'Mensaje de Texto')}</span>
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input type="radio" value="WhatsApp" name="${lang('Prefered Contacted Way', 'Prefiero ser Contactado por')}">
                      <span>WhatsApp</span>
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input type="radio" value="${lang('Email', 'Correo Electr&oacute;nico')}" name="${lang('Prefered Contacted Way', 'Prefiero ser Contactado por')}">
                      <span>${lang('Email', 'Correo Electr&oacute;nico')}</span>
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <label>${lang('What service can we offer you?', '&iquest;Qu&eacute; servicio podemos ofrecerte?')}</label>
                  <select id="contact-services" name="${lang('Service', 'Servicio')}"></select>
                </div>
                <div class="form-group">
                  <label for="contact-message">${lang('Message', 'Mensaje')}:</label>
                  <textarea  id="contact-message" placeholder="${lang('Tell us, how can we help you?', 'Dinos, &iquest;Com&oacute; podemos servirte?')}" rows="4" name="${lang('Message', 'Mensaje')}"></textarea>
                </div>
                <div class="form-group form-buttons">
                  <button type="reset" value="Reset" class="reset" data-aos="zoom-in-up">${lang('Reset', 'Borrar')}</button>
                  <button type="submit" value="Submit" class="submit" data-aos="zoom-in-up">${lang('Submit', 'Enviar')}</button>
                </div>
                <input type="hidden" name="_next" value="${variables.domain}thank-you.html">
              </form>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-items">
              <a href="${variables.phoneLink}" class="item">
                <div class="item-icon" data-aos="zoom-in-up">${variables.phoneIcon}</div>
                <p class="item-text">${lang('phone', 'tel&eacute;fono')}</p>
                <p class="item-detail">${variables.phone}</p>
              </a>
              <a href="${variables.whatsappLink}" target="_blank" class="item">
                <div class="item-icon" data-aos="zoom-in-up">${variables.whatsappIcon}</div>
                <p class="item-text">whatsapp</p>
                <p class="item-detail">${variables.phone}</p>
              </a>
              <a href="${variables.emailLink}" class="item">
                <div class="item-icon" data-aos="zoom-in-up">${variables.emailIcon}</div>
                <p class="item-text">${lang('email', 'correo electr&oacute;nico')}</p>
                <p class="item-detail email">${variables.email}</p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
`;

if (contact) {
  contact.innerHTML = contactStructure;

  const contactServices =  document.querySelector('#contact-services');

  const servicesEnglish = variables.services.english;
  const servicesSpanish = variables.services.spanish;

  let contactService = `
    <option value="${lang('Please, select a service...', 'Por favor, selecciona un servicio...')}" selected disabled>${lang('Please, select a service...', 'Por favor, selecciona un servicio...')}</option>
  `;

  for (let i = 0, j = 0; i < servicesEnglish.length, j < servicesSpanish.length; i++, j++) {

    contactService += `
      <option value="${lang(servicesEnglish[i].name, servicesSpanish[j].name)}">${lang(servicesEnglish[i].name, servicesSpanish[j].name)}</option>
    `;
  }
  contactServices.innerHTML = contactService;
}
