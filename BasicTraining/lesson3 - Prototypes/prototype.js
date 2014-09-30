function User(name) {
    this.name = name;
}

User.prototype.getName = function () {
    return this.name;
};

var klaus = new User('Klaus');
var lisa = new User('Lisa');

User.prototype.setName = function(name) {
    this.name = name;
    return this;
};

console.log(klaus.getName());



