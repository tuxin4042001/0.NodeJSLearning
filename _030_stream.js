var fs = require('fs');
var readable = fs.createReadStream(__dirname + '/_030_source.txt', {encoding: 'utf8', highWaterMark: 1 * 1024});
var writable = fs.createWriteStream(__dirname + '/_030_sourceCopy.txt', {encoding: 'utf8'});

readable.on('data', function(chunk){
    console.log(chunk);
    console.log(chunk.length)
    writable.write(chunk);
})