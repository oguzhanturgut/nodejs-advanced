const dns = require('dns');

dns.lookup('google.com', (err, address) => {
  if (err) console.error(err);
  console.log(address);
});

dns.resolve('google.com', 'MX', (err, address) => {
  if (err) console.error(err);
  console.log(address);
});

dns.reverse('8.8.8.8', (err, hostname) => {
  console.log(hostname);

});
