const querystring = require('querystring');

console.log(
  querystring.stringify({
    name: 'John Doe',
    website: 'example.com/john-doe'
  })
);

console.log(
  querystring.parse('name=John%20Doe&website=example.com%2Fjohn-doe')
);
