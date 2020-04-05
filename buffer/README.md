Buffer are handy when interacting with octet streams like reading binary data from 
data from TCP streams and file systems(image files)

```angular2
> Buffer
[Function: Buffer] {
  poolSize: 8192,
  from: [Function: from],
  of: [Function: of],
  alloc: [Function: alloc],
  allocUnsafe: [Function: allocUnsafe],
  allocUnsafeSlow: [Function: allocUnsafeSlow],
  isBuffer: [Function: isBuffer],
  compare: [Function: compare],
  isEncoding: [Function: isEncoding],
  concat: [Function: concat],
  byteLength: [Function: byteLength],
  [Symbol(kIsEncodingSymbol)]: [Function: isEncoding]
}
```

The data in the buffer does not have a specific character encoding.
When the buffer is allocated, it can not be resized.

Allocate buffer, with filled empty data
```angular2
> Buffer.alloc(8)
<Buffer 00 00 00 00 00 00 00 00>
```

Allocate buffer unsafe, not filled, may contain old data

```angular2
> Buffer.allocUnsafe(8)
<Buffer 90 91 41 04 01 00 00 00>

> Buffer.allocUnsafe(8).fill()
<Buffer 00 00 00 00 00 00 00 00>
```

