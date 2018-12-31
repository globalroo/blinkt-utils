# blinkt-utils

Helper functions for Pimoroni Blinkt! fun with Javascript

```sh
npm i blinkt-utils --save
```
## hsv2rgb - convert HSV to RGB values

_Usage_:

```javascript
const { hsv2rgb } = require("blinkt-utils");
const [red, green, blue] = hsv2rgb(360,1,1);

console.log(red); // 255
console.log(green); // 0
console.log(blue); // 0
```
