(function() {
    "use strict";

    angular
        .module('app.controller', [])
        .controller('MyCtrl', MyCtrl);

    MyCtrl.$inject = ['$scope']


    function MyCtrl($scope) {
        $scope.name = 'Peter';

        $scope.getName = function() {
            return 'Paul and Mary';
        }
    }
})();
