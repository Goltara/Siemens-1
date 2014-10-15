angular
    .module('app', [])
    .controller('MyCtrl', MyCtrl)
    .service('formatterService', formatterService);

function formatterService() {}

formatterService.prototype.toUpperCase = function(input) {
    return input.toUpperCase();
};

MyCtrl.$inject = ['formatterService'];
function MyCtrl(fs) {

    this.name = fs.toUpperCase('Lisa Bart and Maggie');

}