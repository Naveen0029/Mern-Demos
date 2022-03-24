const EventEmitter = require('events');
const emitter = new EventEmitter();

const Logger = require('./EventModule');
const logger = new Logger();

//Register a listener
logger.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);
});

logger.log('message');