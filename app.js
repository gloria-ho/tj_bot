const TJBot = require("tjbot");

let tj_arm = new TJBot(
    ["servo"],
    {},
    {}
);

let tj_led = new TJBot(
    ["led"],
    {},
    {}
);

let arm_raise = tj_arm.raiseArm();
// let arm_lower = tj_arm.armLower();
let arm_back = tj_arm.armBack();
let arm_wave = tj_arm.wave();

let led_shine_blue = tj_led.shine("blue");
let led_shine_red = tj_led.shine("red");
let led_shine_random = tj_led.shine(tj_led.randomColor());

let led_pulse_blue = tj_led.pulse("blue", 2.0);
let led_pulse_red = tj_led.pulse("red", 2.0);
let led_pulse_random = tj_led.pulse(tj_led.randomColor(), 2.0);
