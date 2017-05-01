//buffer is 8 byte = 84 bits, which can store 2 of Int32 data
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
view[2] = 10;
console.log(view);
