const { spawn } = require('child_process');

const child = spawn('node', ['timer.js'], {
  detached: true,
  stdio: 'ignore',
});

// parent process can exit independently from child process
child.unref();
