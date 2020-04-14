// creates a new shell and buffers the output
// best choice if yu want to use shell scripting and return output is not so big
const { exec } = require("child_process");

exec("find . -type f | wc -l", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`Number of files ${stdout}`);
});
