const { Readable } = require("stream");

// const inStream = new Readable();
//
// inStream.push(
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// );
// inStream.push(null); // means there is no more data

const inStream = new Readable({
  read(size) {
    setTimeout(() => {
      this.push(String.fromCharCode(this.currentCharCode++));
      if (this.currentCharCode > 78) {
        this.push(null);
        return;
      }
    }, 100);
  },
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);

process.on("exit", () => {
  console.error(`\n\ncurrentCharCode is ${inStream.currentCharCode}`);
});

process.stdout.on("error", process.exit);
