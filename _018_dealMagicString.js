var Emitter = require('events');
//deal with magic string, write it into a config file, and use it as an variable
var config = require('./_018_config.js').events;
var emitter = new Emitter();
emitter.on(config.GREEK, function(){
    console.log('Hello World!');
})

emitter.emit(config.GREEK);