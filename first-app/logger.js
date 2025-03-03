const EventEmitter = require('events');

const url = 'http://myLogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // Send and HTTP request
    console.log(message);
    // Raise an event
    this.emit('MessageLogged', { id: 1, url: url });
  }

}

module.exports = Logger;