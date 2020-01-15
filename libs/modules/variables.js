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
  domain: 'https://systemsandarchitecture.com/',
  
  menuIconOpen: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-menu menu-icon-open"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
  menuIconClose: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-x menu-icon-close"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',

  phone: '470-295-5723',
  phoneLink: 'tel:1-470-295-5723',
  phoneIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',

  whatsappLink: 'https://wa.me/14702955723',
  whatsappIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-whatsapp"><g transform="translate(6.01132, 6.0000003)"><path d="M 11.47702,8.7356352 V 10.391583 A 1.1038802,1.1039653 0 0 1 10.27379,11.495548 10.922895,10.923736 0 0 1 5.5105473,9.8009612 10.762832,10.763661 0 0 1 2.1989067,6.4890652 10.922895,10.923736 0 0 1 0.50445055,1.7033762 1.1038802,1.1039653 0 0 1 1.6028114,0.50005324 h 1.6558203 a 1.1038802,1.1039653 0 0 1 1.1038802,0.94941096 7.0869109,7.0874571 0 0 0 0.386358,1.551071 1.1038802,1.1039653 0 0 1 -0.248373,1.164683 L 3.799533,4.8662372 a 8.8310416,8.8317221 0 0 0 3.3116406,3.311896 l 0.7009639,-0.701019 a 1.1038802,1.1039653 0 0 1 1.1645938,-0.248392 7.0869109,7.0874571 0 0 0 1.5509507,0.386388 1.1038802,1.1039653 0 0 1 0.949338,1.120525 z M 14.058851,-2.17105 c -2.118423,-2.1184229 -5.043864,-3.3289503 -8.070182,-3.3289503 -6.2543915,0 -11.3991327,5.1447414 -11.3991327,11.399134 0,2.017545 0.5043864,3.934214 1.5131591,5.6491273 l -1.6140364,5.95176 6.0526368,-1.614037 c 1.6140364,0.907896 3.5307052,1.412282 5.4473732,1.412282 v 0 c 6.254391,0 11.50001,-5.144741 11.50001,-11.3991323 0,-3.0263196 -1.311405,-5.8508835 -3.429828,-8.0701837 z"/></g></svg>',

  email: 'contact@systemsandarchitecture.com',
  emailLink: 'mailto:contact@systemsandarchitecture.com',
  emailIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',

  instagram: '@systemsandarchitecture',
  instagramLink: 'https://instagram.com/systemsandarchitecture',
  instagramIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>',

  facebook: '@systemsandarchitecture',
  facebookLink: 'https://facebook.com/systemsandarchitecture',
  facebookIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',

  pinterestLink: 'https://pinterest.com/systemsandarchitecture',
  pinterestIcon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 18 24" fill="none" stroke="#000" stroke-width="1" class="icon icon-pinterest-p"><path d="m9.52 1c-4.46 0-8.87 3.01-8.87 7.89 0 3.1 1.72 4.87 2.77 4.87 0.43 0 0.68-1.22 0.68-1.56 0-0.41-1.03-1.28-1.03-2.99 0-3.54 2.66-6.06 6.11-6.06 2.96 0 5.16 1.71 5.16 4.84 0 2.34-0.93 6.73-3.93 6.73-1.08 0-2.01-0.79-2.01-1.93 0-1.67 1.15-3.28 1.15-5 0-2.92-4.09-2.39-4.09 1.14 0 0.74 0.09 1.56 0.42 2.23-0.6 2.62-1.83 6.52-1.83 9.22 0 0.83 0.12 1.65 0.2 2.49 0.15 0.17 0.07 0.15 0.3 0.07 2.19-3.04 2.11-3.64 3.11-7.62 0.54 1.03 1.92 1.59 3.01 1.59 4.62 0 6.7-4.56 6.7-8.67 0-4.38-3.73-7.23-7.83-7.23z"/></svg>',

  twitter: '@sysandarc',
  twitterLink: 'https://twitter.com/sysandarc',
  twitterIcon: '',

  contactFormIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',

  spreadsheetApi: 'https://sheets.googleapis.com/v4/spreadsheets/1UYxIOivsLOe-W88Dw7wpQnLNXzVlVbQ95mGCTyLRYkA/',
  spreatsheetApiKey: 'key=AIzaSyALvpA28EbrTmVVOIYCus1pvM4Ye3kj4mI',
  servicesCategories: 'values/Services_Categories!A2:C10?',
  services: 'values/Services!A2:F20?',
  portfolio: 'values/Portfolio!A2:C20?',
  spreadsheetUrl: function(values) {
    return this.spreadsheetApi+values+this.spreatsheetApiKey;
  },

  webVirtualReality: [
    { name: 'Outdoors', url: 'outdoors'},
    { name: 'Indoors', url: 'indoors'},
    { name: 'Open Spaces', url: 'open-spaces'}
  ]
}
