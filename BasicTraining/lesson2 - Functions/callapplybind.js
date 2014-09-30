var myObj = {
name: 'Klaus',
    sayHello: function () {
    (function () {
        console.log('Hello ' + this.name);
    })();
}
};

myObj.sayHello();

// self
var myObj = {
    name: 'Klaus',
    sayHello: function () {
        var self = this;
        (function () {
            console.log('self: Hello ' + self.name);
        })();
    }
};

myObj.sayHello();

// bind
var myObj = {
    name: 'Klaus',
    sayHello: function () {
        (function () {
            console.log('bind: Hello ' + this.name);
        }.bind(this))();
    }
};
myObj.sayHello();

// call
var myObj = {
    name: 'Hans-Peter'
};

function sayHello(salutation) {
    console.log('Hello ' + ' ' + salutation + ' '+ this.name);
}

sayHello.call(myObj, 'Mr.');
sayHello.apply(myObj, ['Herr']);

