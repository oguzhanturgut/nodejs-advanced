// customized REPL
const repl = require('repl');

const r = repl.start({
  ignoreUndefined: true,  // get rid of undefined returns in repl
  replMode: repl.REPL_MODE_STRICT // use strict mode
});

// add modules to node global context
// r.context.lodash = require('lodash');
