angular.module('myApp', [])
    .factory('myService', myService);


myService.$inject = ['foo'];

function myService(foo) {
    return {
        test: testFunction
    };

    function testFunction(args) {
        foo.bar(args);
    }
}