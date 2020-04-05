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

### Require order
* try file.js
* try file.json
* try file.node

```angular2
> require.extensions
[Object: null prototype] {
  '.js': [Function (anonymous)],
  '.json': [Function (anonymous)],
  '.node': [Function (anonymous)]
}
```

* .js files
```angular2
> require.extensions['.js'].toString()
'function(module, filename) {\n' +
  "  if (filename.endsWith('.js')) {\n" +
  '    const pkg = readPackageScope(filename);\n' +
  "    // Function require shouldn't be used in ES modules.\n" +
  "    if (pkg && pkg.data && pkg.data.type === 'module') {\n" +
  '      const parentPath = module.parent && module.parent.filename;\n' +
  "      const packageJsonPath = path.resolve(pkg.path, 'package.json');\n" +
  '      throw new ERR_REQUIRE_ESM(filename, parentPath, packageJsonPath);\n' +
  '    }\n' +
  '  }\n' +
  "  const content = fs.readFileSync(filename, 'utf8');\n" +
  '  module._compile(content, filename);\n' +
  '}'
```

* .json files
```angular2
> require.extensions['.json'].toString()
'function(module, filename) {\n' +
  "  const content = fs.readFileSync(filename, 'utf8');\n" +
  '\n' +
  '  if (manifest) {\n' +
  '    const moduleURL = pathToFileURL(filename);\n' +
  '    manifest.assertIntegrity(moduleURL, content);\n' +
  '  }\n' +
  '\n' +
  '  try {\n' +
  '    module.exports = JSONParse(stripBOM(content));\n' +
  '  } catch (err) {\n' +
  "    err.message = filename + ': ' + err.message;\n" +
  '    throw err;\n' +
  '  }\n' +
  '}'
```

* .node files
```angular2
'function(module, filename) {\n' +
  '  if (manifest) {\n' +
  '    const content = fs.readFileSync(filename);\n' +
  '    const moduleURL = pathToFileURL(filename);\n' +
  '    manifest.assertIntegrity(moduleURL, content);\n' +
  '  }\n' +
  "  // Be aware this doesn't use `content`\n" +
  '  return process.dlopen(module, path.toNamespacedPath(filename));\n' +
  '}'
```

### Wrapping and Caching Modules

```angular2
> require('module').wrapper
Proxy [
  [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
  ],
  { set: [Function: set], defineProperty: [Function: defineProperty] }
]
```

### Arguments of a wrapper function
```angular2
[Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: '/Users/null/Documents/GitHub/nodejs-advanced/requireModule',
      exports: {},
      parent: null,
      filename: '/Users/null/Documents/GitHub/nodejs-advanced/requireModule/index.js',
      loaded: false,
      children: [Array],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      '/Users/null/Documents/GitHub/nodejs-advanced/requireModule/index.js': [Module],
      '/Users/null/Documents/GitHub/nodejs-advanced/requireModule/node_modules/find-me/start.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: '/Users/null/Documents/GitHub/nodejs-advanced/requireModule',
    exports: {},
    parent: null,
    filename: '/Users/null/Documents/GitHub/nodejs-advanced/requireModule/index.js',
    loaded: false,
    children: [ [Module] ],
    paths: [
      '/Users/null/Documents/GitHub/nodejs-advanced/requireModule/node_modules',
      '/Users/null/Documents/GitHub/nodejs-advanced/node_modules',
      '/Users/null/Documents/GitHub/node_modules',
      '/Users/null/Documents/node_modules',
      '/Users/null/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  '3': '/Users/null/Documents/GitHub/nodejs-advanced/requireModule/index.js',
  '4': '/Users/null/Documents/GitHub/nodejs-advanced/requireModule'
}
```

### Mocking require function
```angular2
require = function() {
  return { mocked: true };
 };

const fs = require('fs');
console.log(fs);
```
