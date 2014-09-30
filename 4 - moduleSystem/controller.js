(function() {
    "use strict";

    angular
        .module('app.controller', [])
        .controller('My®Ctrl', MyCtrl);

    MyCtrl.$inject = ['$scope'];
    function MyCtrl($scope) {
        $scope.name = 'Peter';

        $scope.getName = function() {
            return 'Paul and Mary';
        }
    }
})();
