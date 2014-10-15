angular
    .module('app', [])
    .controller('MyCtrl', MyCtrl)
    .controller('My2ndCtrl', My2ndCtrl)
    .factory('formattingService', formattingService);


function formattingService() {
    console.log('I am the formatting service');
    return {
        toUpperCase: toUpperCase
    };

    function toUpperCase(input) {
        return input.toUpperCase();
    }
}

MyCtrl.$inject = ['formattingService'];
function MyCtrl(formattingService) {
    this.name = formattingService.toUpperCase('Peter Paul and Mary');
}

My2ndCtrl.$inject = ['formattingService'];
function My2ndCtrl(formattingService) {
    this.name = formattingService.toUpperCase('John Paul and Ringo');
}