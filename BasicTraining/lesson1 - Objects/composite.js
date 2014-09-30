var obj1 = new Object();

var obj2 = {};

var obj3 = {
    color: 'green',
    hello: function() {
        console.log('hello');
    }
};

console.log(obj3.color);
console.log(obj3['color']);
obj3.hello();
obj3['hello']();

var arr1 = new Array();

var arr2 = [];

var arr3 = ['green'];
console.log(arr3[0]);



var klaus = {
    name: 'Klaus',
    getName: function() {
        return this.name;
    }
};

var lisa = {
    name: 'Lisa',
    getName: function(value) {
        console.log(value);
        return this.name;
    }
};

var getKlausName = lisa.getName.bind(klaus, 'foo');
console.log(getKlausName());