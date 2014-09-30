var User = {
    getName: function() {
        return this.name;
    }
};

var klaus = Object.create(User);

klaus.name = 'Klaus';

console.log(klaus.getName());

