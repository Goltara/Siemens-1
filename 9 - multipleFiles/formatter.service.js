angular
    .module('app.formatter', [])
    .factory('formattingService', formattingService);


function formattingService() {
    console.log('I am the formatting service');

    return {
        toUpperCase: toUpperCase,
        toLowerCase: toLowerCase
    };

    function toUpperCase(input) {
        return input.toUpperCase();
    }

    function toLowerCase(input) {
        return input.toLowerCase();
    }
}