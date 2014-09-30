function User(name) {
    this.name = name;
}

User.prototype.getName = function() {
    return this.name;
};

var klaus = new User('Klaus');


var number = 1;
for (var i = 0; i < 100; i++) {
    number += number;
}