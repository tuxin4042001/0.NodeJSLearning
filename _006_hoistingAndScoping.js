//Hoisting将函数外定义的变量提升到函数第一列宣告;
var num = 7;
function hoistingAndScoping(){
    if(true){
        //var num = 42;
    }
    console.log('num + ' + num);
}
var num = 8;
hoistingAndScoping();

//Scoping函数内定义的变量函数外无法使用;
var name = function(){
    firstname = 'Xin';
    lastname = 'Tu';
}

console.log(firstname + ' ' + lastname);
