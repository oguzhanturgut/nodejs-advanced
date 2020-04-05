const print = (stars, header) => {
  console.log('*'.repeat(stars));
  console.log(header);
  console.log('*'.repeat(stars));
};

// to work both as a required module or as a script
if (require.main == module) {
  // Runing as a script
  print(process.argv[2], process.argv[3]);
} else {
  // Being required
  module.exports = print;
}
