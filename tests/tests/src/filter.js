angular.module('myFilter', [])
    .filter('truncate', function() {
        return function(input, chars) {
            return input.substr(0, 5) + chars;
        }
    });