const fs = require("fs");
const file = fs.createWriteStream("./big.file");

for (let i = 0; i < 1e5; i++) {
  file.write(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );
}

file.end();
