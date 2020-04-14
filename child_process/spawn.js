const { spawn } = require('child_process');

// const child = spawn("pwd", [...args]);
// const child = spawn("pwd");
const child = spawn('find', ['.', '-type', 'f']);

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on('exit', (code, signal) => {
  console.log(`child process exited with code ${code}, signal ${signal}`);
});

// events = disconnect, error, message, close
// stdio objects = child.stdin, child.stdout, child.stderr

// Shell mode with different CWD
const child2 = spawn('find . -type f | wc -l', {
  stdio: 'inherit',
  shell: true,
  cwd: '/Users/uprooted/Downloads',
});

// Passing custom ENV options
const child3 = spawn('echo $ANSWER', {
  stdio: 'inherit',
  shell: true,
  env: {
    ANSWER: 42,
  },
});
