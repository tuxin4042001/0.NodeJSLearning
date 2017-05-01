//pipe1: readable(writable);
var fs = require('fs');
var zlib = require('zlib');
var readable = fs.createReadStream(__dirname + '/_030_source.txt', {encoding: 'utf8'});
var writable = fs.createWriteStream(__dirname + '/_031_sourceCopy2.txt', {encoding: 'utf8'});
var compressed = fs.createWriteStream(__dirname + '/_031_source.txt.gz', {encoding: 'utf8'});

var gzip = zlib.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);