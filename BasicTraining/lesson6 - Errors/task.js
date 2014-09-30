try {
    throw new SyntaxError('You have an error in your code');
} catch (e) {
    console.log(e);
}


var UnicornError = function (message) {
    this.message = message;
    this.name = 'UnicornError';
}

UnicornError.prototype = new Error();
UnicornError.prototype.constructor = UnicornError;

var PonyError = function (message) {
    this.message = message;
    this.name = 'PonyError';
}

PonyError.prototype = new Error();
PonyError.prototype.constructor = PonyError;


try {
    throw new UnicornError('A unicorn just stumbled over your code');
    throw new PonyError('A pony just stumbled over your code');
} catch (e) {

    if (e instanceof Error) {
        console.log(e);
    }

    if (e instanceof UnicornError) {
        console.log('The unicorn has you');
    }
    if (e instanceof PonyError) {
        console.log('The pony has you');
    }
}