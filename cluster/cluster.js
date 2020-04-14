const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  console.log(`Forking for ${cpus} CPUs`);

  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  // console.log(cluster.workers);
  // Send message to every worker
  Object.values(cluster.workers).forEach((worker) => {
    worker.send(`Hello Worker ${worker.id}`);
  });
} else {
  require('./server');
}
