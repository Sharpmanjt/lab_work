var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn = function()
{
    console.log('alarm has been triggered');
}

var fn2 = function()
{
    console.log('call 911');
}

eventEmitter.on('call', fn);
eventEmitter.on('call', fn2);
eventEmitter.emit('call');

