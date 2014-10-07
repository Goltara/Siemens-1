angular.module('http', [])
    .controller('httpCtrl', ['$scope', '$http', function($scope, $http) {
        $http.get('/path').success(function(data) {
            $scope.data = data;
        })
    }]);