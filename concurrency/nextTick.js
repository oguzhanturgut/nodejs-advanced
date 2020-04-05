const fs = require('fs');

function fileSize (fileName, cb) {
  if (typeof fileName !== 'string') {

    console.log("sync msg");

    setTimeout(() => {
      console.log('from event loop');
    }, 0);

    process.nextTick(() => {
      console.log('next tick');  // will send cb to the beginning of event loop
    });

    return process.nextTick( // will send cb to the beginning of event loop
      cb,
      new TypeError('argument should be string')
    );
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err);
    }

    cb(null, stats.size);
  });
}

fileSize(1, (err, size) => { // error with filename
  if (err) throw err;

  console.log(`Size in KB: ${size/1024}`);
});

console.log('Hello!');
