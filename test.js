const TJBot = require('tjbot');

let led = new TJBot(
	['led'],
	{},
	{},
);

let arm = new TJBot(
	['servo'],
	{},
	{}
);

let shine_blue = led.shine('blue');

let wave = arm.wave();
