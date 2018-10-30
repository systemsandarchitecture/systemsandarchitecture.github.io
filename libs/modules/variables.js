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
  phoneLink: '1-470-295-5723',
  phone: '(470) 295-5723',
  whatsapp: '14702955723',
  email: 'info@sysandarc.com'
}


