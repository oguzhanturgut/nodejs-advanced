console.log("In ./index.js");

require('find-me');

console.log(arguments);

// require = function() {
//   return { mocked: true };
// };
//
// const fs = require('fs');
// console.log(fs);

const printStars = require('./printStars');
printStars(5, "hello");

require('./ascii-art')();
require('./ascii-art')();
// console.log(require.cache);
