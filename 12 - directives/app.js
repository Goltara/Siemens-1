angular
    .module('app', [])
    .controller('MyCtrl', MyCtrl)
    .directive('myDirective', myDirective);

function myDirective() {
    return {
        restrict: 'EA',
        template: '<div style="height: 100px; width: 100px; background-color: green;">{{name}} {{color}}</div>',
        replace: true,
        scope: {
            name: '@',
            color: '=',
            reverse: '&'
        },
        controller: MyDirectiveController,
        link: function(scope, el, attr) {
            //scope.foo = 'in the child scope';
            console.log(scope.foo);

            //scope.name = attr.myvalue;
            console.log(attr.myvalue);
        }
    }
}

MyDirectiveController.$inject = ['$scope'];
function MyDirectiveController($scope) {
    $scope.foo = 'lala';
    $scope.name = 'Klaus';

    $scope.reverse();

}

MyCtrl.$inject = ['$scope'];
function MyCtrl($scope) {
    $scope.color = 'green';
    $scope.name = 'Lisa';

    $scope.reverseName = function() {
        console.log('reverseName');
    }

    $scope.foo = 'I am the property of your parents controller';


    var vm = this;

    vm.name = 'Peter Paul and Mary';
}