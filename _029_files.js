var fs = require('fs');
//sync
var greet = fs.readFileSync(__dirname + '/_029_file.txt', 'utf8');
console.log(greet);

//async
var greet2 = fs.readFile(__dirname + '/_029_file.txt', function(err, data){
    console.log(err);
    console.log(data.toString());
})

console.log('Done before asyn method');