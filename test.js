
const DateCustomFormat = require('./');

let dateCustomFormat = new DateCustomFormat( "#YYYY#/#MM#/#DD#", new Date() );
console.log( 'dateCustomFormat.convert()', dateCustomFormat.convert() );

let dateCustomFormat2 = new DateCustomFormat( "#YYYY#//#MM#//#DD#", new Date() );
console.log( 'dateCustomFormat2.convert()', dateCustomFormat2.convert() );

let dateCustomFormat3 = new DateCustomFormat( "#YYYY#//#MM#//#DD# #hh#:#mm#", new Date() );
console.log( 'dateCustomFormat3.convert()', dateCustomFormat3.convert() );

