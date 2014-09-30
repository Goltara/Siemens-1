function Number(value) {
    this.value = value;
}

Number.prototype.compare = function(val) {
    if (this.value.indexOf(val) > -1) {
        return false;
    }

    return true;
};

Number.prototype.toString = function() {
    return this.name;
};

function NumberCollection(numbers) {
    this.numbers = [];
    for (var i = 0; i < numbers.length; i++) {
        this.numbers.push(new Number(numbers[i].replace(' ', '')));
    }
}

NumberCollection.prototype.check = function() {
    for (var i = 0; i < this.numbers.length; i++) {
        for (var j = 0; j < this.numbers.length; j++) {
            if (i !== j) {
                if (!this.numbers[i].compare(this.numbers[j])) {
                    return false;
                }
            }
        }
    }
    return true;
};

var coll = new NumberCollection(['911', '97 625', '91 1254']);

console.log(coll.check());