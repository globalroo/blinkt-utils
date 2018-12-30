const toRGB = arr => arr.map(val => Math.round(val * 255));

/**
 * HSV to RGB color conversion
 * @param {number} h - Hue 0 to 360
 * @param {number} s - Saturation 0 to 1
 * @param {number} v - Value 0 1
 */

function hsv2rgb_method1(h, s, v) {
	let [r = 0, g = 0, b = 0] = [];

	const c = v * s;
	const hh = h / 60;
	const X = c * (1 - Math.abs((hh % 2) - 1));
	const m = v - c;

	switch (Math.floor(hh)) {
		case 0:
			r = c;
			g = X;
			break;
		case 1:
			r = X;
			g = c;
			break;
		case 2:
			g = c;
			b = X;
			break;
		case 3:
			g = X;
			b = c;
			break;
		case 4:
			r = X;
			b = c;
			break;
		default:
			r = c;
			b = X;
	}
	return toRGB([r + m, g + m, b + m]);
}

function hsv2rgb_method2(h, s, v) {
	h = h % 360;
	s = Math.max(0, Math.min(v, 1));
	v = Math.max(0, Math.min(v, 1));

	if (!s) return toRGB([(v, v, v)]);

	const b = (1 - s) * v;
	const vb = v - b;
	const hm = h % 60;

	switch (h / 60) {
		case 1:
			return toRGB([(vb * (60 - hm)) / 60 + b, v, b]);
		case 2:
			return toRGB([b, v, (vb * hm) / 60 + b]);
		case 3:
			return toRGB([b, (vb * (60 - hm)) / 60 + b, v]);
		case 4:
			return toRGB([(vb * hm) / 60 + b, b, v]);
		case 5:
			return toRGB([v, b, (vb * (60 - hm)) / 60 + b]);
		default:
			return toRGB([v, (vb * h) / 60 + b, b]);
	}
}

module.exports = {
	hsv2rgb_a: hsv2rgb_method1,
	hsv2rgb_b: hsv2rgb_method2,
	hsv2rgb: hsv2rgb_method1 //default - seems more accurate on saturation calcs
};
