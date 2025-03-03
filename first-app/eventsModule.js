const Logger = require('./logger');
const logger = new Logger();


// Register an Event
logger.on('MessageLogged', (arg) => {
  console.log('logger is listening');
  console.log('data passed through the event listener', arg);
});

logger.log('message');