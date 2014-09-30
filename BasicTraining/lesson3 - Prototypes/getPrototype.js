function User(name) {
    this.name = name;
}

User.prototype.getName = function() {
    return this.name;
};

var klaus = new User('Klaus');

console.log(klaus.__proto__);
console.log(klaus.constructor.prototype);
console.log(Object.getPrototypeOf(klaus));

console.log(klaus instanceof User);