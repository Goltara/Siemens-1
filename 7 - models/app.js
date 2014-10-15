angular
    .module('app', [])
    .controller('MyCtrl', MyCtrl);

MyCtrl.$inject = ['$scope'];
function MyCtrl($scope) {
    $scope.name = 'Peter';

    function User(name) {
        this.name =  name;
    }
    User.prototype.getName = function() {
        return this.name;
    };


    $scope.myUser = new User('Klaus');

    $scope.myObj = {
        name: 'Ringo',
        age: 'very old'
    };

    $scope.getName = function() {
        return 'Paul and Mary';
    }
}