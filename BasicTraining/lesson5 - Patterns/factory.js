function localStorage() {

    this.name = 'localStorage';

    this.save = function () {
        console.log('save to localStorage');
    }
}

function ajax() {

    this.name = 'ajax';

    this.save = function () {
        console.log('save to server');
    }
}

function PersisterFactory() {
    this.persisterClass = 'ajax';
}

PersisterFactory.prototype.getPersister = function (type) {
    if (type) {
        this.persisterClass = type;
    }

    return new window[this.persisterClass]();
};

var persisterFactory = new PersisterFactory();

var ajax = persisterFactory.getPersister();
var local = persisterFactory.getPersister('localStorage');

console.log(ajax, local);

ajax.save();
local.save();