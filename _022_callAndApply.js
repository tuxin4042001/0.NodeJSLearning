var obj = {
    name: 'Xin Tu',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Yang Yue'});
obj.greet.apply({name: 'Fang Zhang'});