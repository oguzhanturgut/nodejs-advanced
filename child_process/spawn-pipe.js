// best choice if return output is so big
const { spawn } = require("child_process");

const find = spawn("find", [".", "-type", "f"]);
const wc = spawn("wc", ["-l"]);

// process.stdin.pipe(child.stdin);

find.stdout.pipe(wc.stdin);

// child.stdout.on("data", (data) => {
//   console.log(`child stdout:\n${data}`);
// });

wc.stdout.on("data", (data) => {
  console.log(`Number of files ${data}`);
});
