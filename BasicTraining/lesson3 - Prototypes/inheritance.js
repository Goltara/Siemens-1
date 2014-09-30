inherits = function(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};

function Car() {
    debugger;
    this.tires = 4;
}
Car.prototype.getTires = function() {
    return this.tires;
};

function Cabrio() {
    this.roof = 'closed';
    Cabrio.super_.bind(this)();
}
inherits(Cabrio, Car);
Cabrio.prototype.openRoof = function() {
    this.roof = 'open';
};

var myCabrio = new Cabrio();

console.log(myCabrio);
console.log(myCabrio.getTires());
myCabrio.openRoof();
console.log(myCabrio);


console.log('Car: ', myCabrio instanceof Car);
console.log('Cabrio: ', myCabrio instanceof Cabrio);