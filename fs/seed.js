const fs = require("fs");
const path = require("path");
const dirname = path.join(__dirname, "files");

fs.mkdirSync(dirname);
const day = 24 * 60 * 60 * 1000;

for (let i = 0; i < 10; i++) {
  const filePath = path.join(dirname, `file${i}`);
  fs.writeFile(filePath, i, (err) => {
    if (err) throw err;

    const time = (Date.now() - i * day) / 1000;
    fs.utimes(filePath, time, time, (err1) => {
      if (err1) throw err1;
    });
  });
}
