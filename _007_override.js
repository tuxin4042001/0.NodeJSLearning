//Javascript don't have override with it, the latest function will replace the first one
var myNamespace = {
    firstname: 'Xin',
    lastname: 'Tu',
    print: function(){
        console.log("Hello World!");
    },
        print: function(){
        console.log(this.firstname + ' ' + this.lastname);
    },
};

myNamespace.print();