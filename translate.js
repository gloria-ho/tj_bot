const TJBot = require('tjbot');
listen = require('./listen.js');

let tj = new TJBot(
  [],
  {},
  {
   language_translator: {    
    apikey: 'V1A5o-PA2LW01SytinR02it3W-nOxJB22ACBMmjvW1nv',
    'url': 'https://api.us-east.language-translator.watson.cloud.ibm.com/instances/c8c21cd8-2aeb-4baa-aaf4-e2b0988ead7d'
   },
  }
);

let text = 'bonjour';

module.exports = {
    translate: function() {
        tj.identifyLanguage(text).then(function(languages) {
            var sourceLanguage = languages.languages[0].language;
            var targetLanguage = 'en';
                
            tj.isTranslatable(sourceLanguage, targetLanguage).then(function(result) {
                if(result) {
                    tj.translate(text, sourceLanguage, targetLanguage).then(function(translation) {
                        console.log(translation.translations[0].translation);
                    });
                } else {
                console.log('Unable to translate from "'+sourceLanguage+'" to "'+targetLanguage+'"');
                }
            })
        })
    }
};