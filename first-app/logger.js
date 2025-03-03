const url = 'http://myLogger.io/log';

function log(message) {
  // Send and HTTP request
  console.log(message);
}

module.exports = log;