/**
 * HSV to RGB color conversion
 * @param {number} h - Hue 0 to 360
 * @param {number} s - Saturation 0 to 1
 * @param {number} v - Value 0 1
 */

const hsv2rgb = (h, s, v) => {
	h = Math.floor(h / 60);
	const i = Math.floor(h);
	const f = h - i;

	let p = v * (1 - s);
	let q = v * (1 - s * f);
	let t = v * (1 - s * (1 - f));

	v = Math.floor(255 * v);
	p = Math.floor(255 * p);
	q = Math.floor(255 * q);
	t = Math.floor(255 * t);

	switch (i % 6) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		default:
			return [v, p, q];
	}
};

module.exports = {
	hsv2rgb: hsv2rgb
};
