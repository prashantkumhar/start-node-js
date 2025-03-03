const log = require('./logger');
function Greet(name) {
  console.log('Hello ' + name);
  // window.location.href  => window is not available inside the node env
  // in node we have global instead of window
}

console.log(module);
Greet('Prashant');
log('log this in server side log');