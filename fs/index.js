const fs = require("fs");

// asynchronous
fs.readFile(__filename, (err, data) => {
  if (err) throw err;

  console.log(data.toString()); // data is Buffer
});

// synchronous
const data = fs.readFileSync(__filename);
// exceptions are immediately thrown
console.log(data);
