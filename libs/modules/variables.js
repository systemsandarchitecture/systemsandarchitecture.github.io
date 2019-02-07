// language of the document
const documentLanguage = document.documentElement.lang;
const languageEnglish = documentLanguage === 'en';
const languageSpanish = documentLanguage === 'es';

module.exports = {
  english: languageEnglish,
  spanish: languageSpanish,
  language: function(eng, spa) {
    if (languageEnglish) {
      return eng;
    } else if (languageSpanish) {
      return spa;
    }
  },
  name: 'Systems & Architecture',
  legalName: 'Systems & Architecture LLC',
  domain: 'https://sysandarc.com/',
  phone: '470-295-5723',
  phoneLink: '1-470-295-5723',
  phoneIcon: 'fas fa-phone',
  smsIcon: 'far fa-comment-alt',
  whatsappLink: '14702955723',
  whatsappIcon: 'fab fa-whatsapp',
  email: 'info@sysandarc.com',
  emailIcon: 'far fa-envelope',
  instagram: 'https://instagram.com/sysandarc/',
  instagramIcon: 'fab fa-instagram',
  facebook: 'https://facebook.com/sysandarc/',
  facebookIcon: 'fab fa-facebook-f',
  twitter: 'https://twitter.com/sysandarc/',
  twitterIcon: 'fab fa-twitter',
  contactFormIcon: 'fas fa-envelope-open-text',
  servicesPage: {
    english: [
      {
        name: 'Custom Web Design',
        description: 'Starting from scratch, we will work with you in <strong>planning</strong> for your website. We will take care of even the smallest <strong>design</strong> detail by using the most trending <strong>development</strong> languages and tools. We will do all the necessary <strong>tests</strong> before the final <strong>publication.</strong>',
        image: 'fas fa-code'
      },
      {
        name: 'Custom Web Design on CMS',
        description: 'Wordpress is used by more than 25% of all websites worldwide. We design a unique template for your business.',
        image: 'fab fa-wordpress-simple'
      },
      {
        name: 'Redesign, Modification and/or Maintenance',
        description: 'Your business website is already online... but it doesn&apos;t completely fulfill your expectations, you do not have time to upkeep your website, or web design is just not your thing. We can help you make changes, enhance, and/or maintain your business website.',
        image: 'fas fa-cogs'
      },
      {
        name: 'Responsive Web Design',
        description: 'We will make your business website user friendly and visually appealing on any device, whether it be a smartphone, tablet, laptop, or desktop computer.',
        image: 'fas fa-mobile-alt'
      },
      {
        name: 'Search Engine Optimization (SEO)',
        description: 'We will use select keywords and coding needed to ensure that your website will appear among the top search results.',
        image: 'fas fa-search'
      },
      {
        name: 'Web Virtual Reality',
        description: 'Show your business in a different way. Introduce your customers to a new experience, showcasing your services in a 360 view.',
        image: 'fas fa-street-view'
      }
    ],
    spanish: [
      {
        name: 'Diseño Web Personalizado',
        description: 'Empezando desde cero, trabajaremos contigo en la <strong>planificaci&oacute;n</strong> de tu sitio web, cuidaremos hasta el mas m&iacute;nimo detalle en el <strong>dise&ntilde;o</strong>, utilizando para ello las herramientas y lenguajes de <strong>desarrollo</strong> de &uacute;ltima tendencia, haremos todas las <strong>pruebas</strong> necesarias antes de la <strong>publicaci&oacute;n</strong> final de tu idea.',
        image: 'fas fa-code'
      },
      {
        name: 'Diseño Web Personalizado en Wordpress',
        description: 'Wordpress es utilizado por mas del 25% del total de sitios web a nivel mundial. Dise&ntilde;amos una plantilla &uacute;nica para tu negocio.',
        image: 'fab fa-wordpress-simple'
      },
      {
        name: 'Rediseño, Modificación y/o Mantenimiento',
        description: 'El sitio web de tu negocio ya esta en l&iacute;nea, pero no llena totalmente tus expectativas, no tienes tiempo de revisarlo &oacute; simplemente el dise&ntilde;o web no es lo tuyo. ¿Quieres hacer cambios, mejorarlo, mantenerlo?',
        image: 'fas fa-cogs'
      },
      {
        name: 'Diseño Web Adaptable',
        description: 'Haremos que la p&aacute;gina web de tu negocio se vea bien en cualquier dispositivo, ya sea un tel&eacute;fono inteligente, tableta, computadora port&aacute;til o computadora de escritorio.',
        image: 'fas fa-mobile-alt'
      },
      {
        name: 'Optimización para Motores de Busqueda (SEO)',
        description: 'Utilizaremos las palabras adecuadas y el c&oacute;digo necesario para que tu sitio web sea visto en las posiciones m&aacute;s altas en los resultados de busqueda.',
        image: 'fas fa-search'
      },
      {
        name: 'Realidad Virtual en tu Página Web',
        description: 'Muestra tu negocio de una manera diferente. Presentale a tus clientes una nueva experiencia, mostrando tus servicios en una vista de 360 grados.',
        image: 'fas fa-street-view'
      }
    ]
  },
  portfolioPage: {
    webDesign: [
      {
        name: 'Turkey Steel Erectors',
        url: 'https://turkeysteelerectors.com/',
        image: 'turkey-steel-erectors'
      },
      {
        name: 'South Cobb Storage',
        url: 'https://southcobbstorage.com/',
        image: 'south-cobb-storage'
      },
      {
        name: 'Kike\'s Tree Services',
        url: 'https://kikestreeservices.com/',
        image: 'kikes-tree-services'
      },
      {
        name: 'DSJGA Ventures Inc',
        url: 'https://dsjga.com/',
        image: 'dsjga'
      },
      {
        name: 'Central Services',
        url: 'https://centralservicestax.com/',
        image: 'central-services'
      },
      {
        name: 'Tripoli Halal Meat',
        url: 'https://tripolihalalmeat.com/',
        image: 'tripoli-halal-meat'
      },
      {
        name: 'Apex Furniture Refinishing',
        url: 'https://atlantafurniturerefinishing.com/',
        image: 'apex-furniture-refinishing'
      },
      {
        name: 'Once In A Lifetime Bridal Boutique',
        url: 'https://sysandarc.com/sites/1lifetimebridal/',
        image: 'once-in-a-lifetime-bridal-boutique'
      },
      {
        name: 'Antojo Taco Wrap',
        url: 'https://sysandarc.com/sites/antojotacowrap/',
        image: 'antojo-taco-wrap'
      },
      {
        name: 'Taxi Familiar',
        url: 'https://sysandarc.com/sites/taxifamiliar/',
        image: 'taxi-familiar'
      }
    ],
    webVirtualReality: [
      { name: 'Outdoors', url: 'outdoors'},
      { name: 'Indoors', url: 'indoors'},
      { name: 'Open Spaces', url: 'open-spaces'}
    ]
  }
}


