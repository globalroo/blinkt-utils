# blinkt-utils

Helper functions for Pimoroni Blinkt! fun with Javascript

```sh
npm i blink-utils --save
```
## hsv2rgb - convert HSV to RGB values

_Usage_:

```javascript
const { rgb2hsv } = require("blinkt-utils");
const [red, green, blue] = rgb2hsv(360,1,1);

console.log(red); // 255
console.log(green); // 0
console.log(blue); // 0
```