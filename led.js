const TJBot = require('tjbot');

let led = new TJBot(
    ['led'],
    {},
    {}
);

let shine_blue = led.shine('blue');
let shine_red = led.shine('red');
let shine_random = led.shine(led.randomColor());

let pulse_blue = led.pulse('blue', 2.0);
let pulse_red = led.pulse('red', 2.0);
let pulse_random = led.pulse(led.randomColor(), 2.0);