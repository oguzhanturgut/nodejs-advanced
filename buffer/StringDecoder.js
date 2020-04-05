const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

// String decoder handles multi byte characters, preserves encoded
// multi-byte UTF-8 and UTF-16 characters
// default toString() method does not do that!

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk != null) {
    const buffer = Buffer.from([chunk]);
    console.log('With .toString():', buffer.toString());
    console.log('With StringDecoder:', decoder.write(buffer));
  }
});

// 0xE2, 0x82, 0xAC -> €
