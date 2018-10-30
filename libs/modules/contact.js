import variables from './variables';

let language = variables.language;

const contactPage = document.querySelector('#contact');

const contactStructure = `
  <div class="top-right white"></div>
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="contact-title">${language('Contact Us', 'Contáctanos')}</h1>
      </div>
      <div class="content">
        <div class="contact">
          <a href="tel:${variables.phoneLink}" class="contact-item">
            <i class="fas fa-phone" data-aos="zoom-in-up"></i>
            <p>${language('by phone', 'por teléfono')}</p>
            <p>${variables.phone}</p>
          </a>
          <a href="sms:${variables.phoneLink}" class="contact-item">
            <i class="fas fa-comment-alt" data-aos="zoom-in-up"></i>
            <p>${language('by text message', 'por mensaje de texto')}</p>
            <p>${variables.phone}</p>
          </a>
          <a href="https://api.whatsapp.com/send?phone=${variables.whatsapp}" target="_blank" class="contact-item">
            <i class="fab fa-whatsapp" data-aos="zoom-in-up"></i>
            <p>${language('by', 'por')} whatsapp</p>
            <p>${variables.phone}</p>
          </a>
          <a href="mailto:${variables.email}" class="contact-item">
            <i class="fas fa-envelope" data-aos="zoom-in-up"></i>
            <p>${language('by email', 'por correo electrónico')}</p>
            <p>${variables.email}</p>
          </a>
        </div>
        <form action="//formspree.io/${variables.email}" method="POST" class="contact-form">
          <i class="fas fa-envelope-open"></i>
          <p>${language('or send us a message', 'o envíanos un mensaje')}</p>
          <div class="form-group">
            <label for="contact-name">${language('Name', 'Nombre')}:</label>
            <input type="text" id="contact-name" placeholder="${language('Full Name', 'Nombre Completo')}" name="${language('Name', 'Nombre')}:">
          </div>
          <div class="form-group-inline">
            <div class="form-group">
              <label for="contact-phone">${language('Phone', 'Teléfono')}:</label>
              <input type="tel" id="contact-phone" placeholder="XXX-XXX-XXXX" name="${language('Phone', 'Teléfono')}:">
            </div>
            <div class="form-group">
              <label for="contact-email">${language('Email', 'Correo Electrónico')}:</label>
              <input type="email" id="contact-email" placeholder="${language('your-email@example.com', 'tu-email@ejemplo.com')}" name="${language('Email', 'Correo Electrónico')}:">
            </div>
          </div>
          <div class="form-group">
            <label>${language('How do you prefer to be contacted?', '¿Comó prefieres ser contactado(a)?')}</label>
            <div class="radio">
              <label>
                <input type="radio" value="${language('Phone Call', 'Llamada')}" name="${language('Prefered Contacted Way', 'Prefiero ser Contactado por')}:">
                <span>${language('Phone Call', 'Llamada')}</span>
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" value="${language('Text Message', 'Mensaje de Texto')}" name="${language('Prefered Contacted Way', 'Prefiero ser Contactado por')}:">
                <span>${language('Text Message', 'Mensaje de Texto')}</span>
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" value="WhatsApp" name="${language('Prefered Contacted Way', 'Prefiero ser Contactado por')}:">
                <span>WhatsApp</span>
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" value="${language('Email', 'Correo Electrónico')}" name="${language('Prefered Contacted Way', 'Prefiero ser Contactado por')}:">
                <span>${language('Email', 'Correo Electrónico')}</span>
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="contact-message">${language('Message', 'Mensaje')}:</label>
            <textarea  id="contact-message" placeholder="${language('Tell us, how can we help you?', 'Dinos, ¿Comó podemos servirte?')}" rows="4" name="${language('Message', 'Mensaje')}:"></textarea>
          </div>
          <div class="form-group form-buttons">
            <button type="reset" value="Reset">${language('Reset', 'Borrar')}</button>
            <button type="submit" value="Submit">${language('Submit', 'Enviar')}</button>
          </div>
          <input type="hidden" name="_next" value="https://sysandarc.com/pages/${language('thank-you', 'gracias')}.html">
        </form>
      </div>
    </div>
  </div>
`;

// insert contact structure in page
if (contactPage) {
  contactPage.innerHTML = contactStructure;
}