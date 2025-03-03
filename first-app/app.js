const path = require('path');
function Greet(name) {
  console.log('Hello ' + name);
  // window.location.href  => window is not available inside the node env
  // in node we have global instead of window
}

console.log(module);
Greet('Prashant');

const pathName = path.parse(__filename);
console.log(pathName);