const http = require('http');
const pid = process.pid;

http
  .createServer((req, res) => {
    for (let i = 0; i < 1e7; i++) {
      res.end(`Handled by process ${pid}`);
    }
  })
  .listen(8080, () => {
    console.log(`Started process ${pid}`);
  });

// if worker gets any message print to console
process.on('message', (message) => {
  console.log(`Message from master: ${message}`);
});
