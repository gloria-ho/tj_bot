const TJBot = require('tjbot');

let led = new TJBot(
    ['led'],
    {},
    {}
);

let pulse_random = led.pulse(led.randomColor(), 2.0);
