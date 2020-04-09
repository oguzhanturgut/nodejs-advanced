### Console object

```
> console
{
  log: [Function: bound consoleCall],
  warn: [Function: bound consoleCall],
  dir: [Function: bound consoleCall],
  time: [Function: bound consoleCall],
  timeEnd: [Function: bound consoleCall],
  timeLog: [Function: bound consoleCall],
  trace: [Function: bound consoleCall],
  assert: [Function: bound consoleCall],
  clear: [Function: bound consoleCall],
  count: [Function: bound consoleCall],
  countReset: [Function: bound consoleCall],
  group: [Function: bound consoleCall],
  groupEnd: [Function: bound consoleCall],
  table: [Function: bound consoleCall],
  debug: [Function: bound consoleCall],
  info: [Function: bound consoleCall],
  dirxml: [Function: bound consoleCall],
  error: [Function: bound consoleCall],
  groupCollapsed: [Function: bound consoleCall],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context],
  [Symbol(kBindStreamsEager)]: [Function: bound ],
  [Symbol(kBindStreamsLazy)]: [Function: bound ],
  [Symbol(kBindProperties)]: [Function: bound ],
  [Symbol(kWriteToConsole)]: [Function: bound ],
  [Symbol(kGetInspectOptions)]: [Function: bound ],
  [Symbol(kFormatForStdout)]: [Function: bound ],
  [Symbol(kFormatForStderr)]: [Function: bound ]
}
```

`console.log` uses `util` package under the hood.

`console.assert` for testing simple arguments

`console.trace` prints message, and the call stack at the moment

`console.time(label)` and `console.timeEnd(label)`
