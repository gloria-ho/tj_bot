const TJBot = require ('tjbot');

class TJ {
	constructor(hardware, settings, credentials) {
		this.hardware = hardware,
		this.settings = settings,
		this.credentials = credentials
	};
	
	arm() {
		new TJBot(
			['servo'],
			{},
			{}
		);
	}

	wave() {
		this.arm().wave();
	};
};

let tj = new TJ();

tj.wave();
