This module convert js date format to custom format.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save date-custom-format
```

```js
const DateCustomFormat = require('date-custom-format');

let dateCustomFormat = new DateCustomFormat( "#YYYY#/#MM#/#DD#", new Date() );
console.log( 'dateCustomFormat.convert()', dateCustomFormat.convert() );

let dateCustomFormat2 = new DateCustomFormat( "#YYYY#//#MM#//#DD#", new Date() );
console.log( 'dateCustomFormat2.convert()', dateCustomFormat2.convert() );

let dateCustomFormat3 = new DateCustomFormat( "#YYYY#//#MM#//#DD# #hh#:#mm#", new Date() );
console.log( 'dateCustomFormat3.convert()', dateCustomFormat3.convert() );
```

### Running tests
```sh
$ node test.js
```

### License

Released under the [MIT License](LICENSE).