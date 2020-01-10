var TJBot = require('tjbot');
    
var tj = new TJBot(  
  ['speaker'],  
  {
    robot: {
      gender: 'male'
    },
    speak: {
      language: 'en-US'
    }
  },
  {
    text_to_speech: {
        "apikey": "sEBUbw1jg15XKm489CsfuebH8bDc_O5JZ96D6Bym8zIr",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/a3b746a8-0367-4a1d-a57c-7f85420b1090"
    }
  });

  tj.speak("Hello World");