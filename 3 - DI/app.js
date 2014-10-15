(function() {
    "use strict"
    var app = angular.module('app', []);

    app.controller('MyCtrl', function($scope) {
        $scope.name = 'Peter';
    });

    app.controller('MyCtrl2', ['$scope', function(a) {
        a.name = 'Paul';
    }]);

    app.controller('MyCtrl3', MyCtrl3);
    MyCtrl3.$inject = ['$scope'];
    function MyCtrl3($scope) {
        $scope.name = 'Mary';
    }
})();

