var Emitter = require('./_016_emitter.js');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('somewhere, someone said hello');
});

emtr.on('greet', function(){
    console.log('a greeting occured');
});

emtr.emit('greet');