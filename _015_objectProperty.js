//object properties and methods
var obj = {
    greet: 'hello'
}

console.log(obj.greet);
console.log(obj['greet']);

//function and array
var array = [];
array.push(1);
array.push('Hello World!');
array.push(function(){
    console.log('array hello world! 1');
});

array.push(function(){
    console.log('array hello world! 2');
});

array.push(function(){
    console.log('array hello world! 3');
});

//iteration of array
for(var i = 0; i < array.length; i++){
    console.log(array[i]);
    array[2]();
    array[3]();
    array[4]();
}

array.forEach(function(item){
    console.log(item);
    array[2]();
    array[3]();
    array[4]();
})