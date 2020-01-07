const TJBot = require('tjbot');

let led = new TJBot(
	['led'],
	{},
	{}
);

let tj = new TJBot(
	['microphone'],
	{listen: {
		language: 'en-US'
		}
	},
	{speech_to_text:{
		apikey: 'cy7BQ2QnPiL2kE9Y4SuA-P2JMaercs-BD_g7Xo6vMoRY',
		url: 'https://api.us-east.speech-to-text.watson.cloud.ibm.com/instances/c69221d1-ca2a-4e22-aac0-6c479888b334'
		}
	}
);

tj.listen((text) => {
	led.shine('green'); // green to signal beginning of listening
	console.log(text);
	tj.stopListening();
	led.pulse('red', 2.0); // red to signal end of listening
});