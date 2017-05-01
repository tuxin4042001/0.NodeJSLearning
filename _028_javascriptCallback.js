var greet = function(callback){
    console.log('Hello World!');
    var data = {
        name: 'John Doe'
    }
    callback(data);
}

greet(function(data){
    console.log('callback function has been invoked!');
    console.log(data);
})

greet(function(data){
    console.log('callback function has been invoked once again!');
    console.log(data.name);
})