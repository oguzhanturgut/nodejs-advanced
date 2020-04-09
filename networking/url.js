
const url = require('url');

const urlString =
  'https://www.google.com/search?q=javascript';

console.log(
  url.parse(urlString, true)
);

const urlObject = {
  protocol: 'https',
  host: 'www.yelp.com',
  search: '?q=cafe',
  pathname: '/search',
};

console.log(
  url.format(urlObject)
);
