const { hsv2rgb } = require("../src/index");

/*
 ** Red is 0°
 ** Green is 120°
 ** Blue is 240°
 ** Red is also 360°, which is the exact same as 0°
 */

const RED_OBJECT = { red: 255, green: 0, blue: 0 };
const GREEN_OBJECT = { red: 0, green: 255, blue: 0 };
const BLUE_OBJECT = { red: 0, green: 0, blue: 255 };

describe("hsb2rgb tests", () => {
	test("Red [255,0,0] at 0°", () => {
		const [red, green, blue] = hsv2rgb(0, 1, 1);
		expect({ red, green, blue }).toEqual(RED_OBJECT);
	});
	test("Green [0,255,0] at 120°", () => {
		const [red, green, blue] = hsv2rgb(120, 1, 1);
		expect({ red, green, blue }).toEqual(GREEN_OBJECT);
	});
	test("Blue [0,0,255] at 240°", () => {
		const [red, green, blue] = hsv2rgb(240, 1, 1);
		expect({ red, green, blue }).toEqual(BLUE_OBJECT);
	});
	test("Red [255,0,0] at 360°", () => {
		const [red, green, blue] = hsv2rgb(360, 1, 1);
		expect({ red, green, blue }).toEqual(RED_OBJECT);
	});
	test("Value Faded Red [128,0,0] at 0° and value .5", () => {
		const result = hsv2rgb(0, 1, 0.5);
		expect(result).toEqual([128, 0, 0]);
	});
	test("Saturated Faded Red [255,128,128] at 0° and saturation .5", () => {
		const result = hsv2rgb(0, 0.5, 1);
		expect(result).toEqual([255, 128, 128]);
	});
});
