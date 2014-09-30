function User (name) {
    this.name = name;
}

function addressDecorator (user) {
    user.street = '';
    user.place = '';
    user.country = '';

    user.getAddress = function () {
        return {
            street: this.street,
            place: this.place,
            country: this.country
        }
    }.bind(user);
}


var klaus = new User('Klaus');
addressDecorator(klaus);

klaus.street = 'Siemensallee 84';
klaus.place = 'Karlsruhe';
klaus.country = 'Germany';

console.log(klaus.getAddress());