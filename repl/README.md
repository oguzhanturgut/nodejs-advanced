Node.js V8 options in progress features 

`node --v8-options | grep "in progress"`

Garbage collecter options

`node --v8-options | grep gc`

Use `_` for last evaluated value in node repl
```angular2
❯ node
Welcome to Node.js v13.8.0.
Type ".help" for more information.
> Math.random()
0.8912795906383413
> _
0.8912795906383413
> let n = _
undefined
> n
0.8912795906383413
>
```

Check syntax without executing script

`node -c script.js`

Evaluate string and print result

`node -p "process.arch"`
using cli arguments
`node -p "process.argv.slice(1)" test 42`

Environmental variables

`node -p "process.env" | less`
