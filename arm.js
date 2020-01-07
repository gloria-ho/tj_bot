const TJBot = require('tjbot');

let arm = new TJBot(
	['servo'],
	{},
	{},
);

let raise = arm.raiseArm();
let back = arm.armBack();
let wave = arm.wave();
