//module.exports = function(){};
var greet = require('./_012_greet1.js');
greet();

//module.exports.greet = function(){};
var greet2 = require('./_012_greet2.js').greet;
greet2();

//module.exports = new Greet();
var greet3 = require('./_012_greet3.js');
greet3.greet();
greet3.greeting = "change hello world!";

var greet3b = require('./_012_greet3.js');
greet3b.greet();

//module.exports = Greet;
var greet4 = require('./_012_greet4.js');
var greet4a = new greet4();
greet4a.greet();

//module.exports = {greeting: greeting, greet: greet}; 
var greet5 = require('./_012_greet5.js');
greet5.greet();