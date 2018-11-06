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
  phone: '(470) 295-5723',
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
  contactFormIcon: 'fas fa-envelope-open-text'
}


