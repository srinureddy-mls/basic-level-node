const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('myEvent', () => {
  console.log('Event triggered!');
});
myEmitter.emit('myEvent');
