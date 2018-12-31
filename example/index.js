const { hsv2rgb } = require("../src/index");

const [red, green, blue] = hsv2rgb(360, 1, 1);

console.log(red); // 255
console.log(green); // 0
console.log(blue); // 0
