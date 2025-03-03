const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register an Event
emitter.on('MessageLogged', (arg) => {
  console.log('logger is listening');
  console.log('data passed through the event listener', arg)
});

// Raise an event
emitter.emit('MessageLogged', { id: 1, url: 'url' });