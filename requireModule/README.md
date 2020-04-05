### require("something")

Steps
* Resolving
* Loading
* Wrapping
* Evaluating
* Caching

### Module Object
```angular2
> console.log(module)
Module {
  id: '<repl>',
  path: '.',
  exports: {},
  parent: undefined,
  filename: null,
  loaded: false,
  children: [],
  paths: [
    '/Users/null/Documents/GitHub/nodejs-advanced/repl/node_modules',
    '/Users/null/Documents/GitHub/nodejs-advanced/node_modules',
    '/Users/null/Documents/GitHub/node_modules',
    '/Users/null/Documents/node_modules',
    '/Users/null/node_modules',
    '/Users/node_modules',
    '/node_modules',
    '/Users/null/.node_modules',
    '/Users/null/.node_libraries',
    '/usr/local/lib/node'
  ]
}
```

First look at local directory and paths
```angular2
// Extra paths:
// $HOME/.node_modules
// $HOME/.node_libraries
// $PREFIX/lib/node
```

### require.resolve("module")

Find the module but do not evaluate

In a folder with customized starting point for modules
add a package.json
```angular2
{
  "name": "find-me",
  "main": "start.js"
}

```
